import styled from "styled-components";
import React from "react";
import Library from "./components/Library";
import AddCdForm from "./components/AddCdForm";
import EditCdForm from "./components/EditCdForm";
import './styles/main.css'

import { getFirestore } from "firebase/firestore";
import { collection, doc, addDoc, setDoc, deleteDoc, getDocs } from "firebase/firestore";

function App({ fireStoreApp }) {

  const [cdList, setCdList] = React.useState([])
  const [cd, setCd] = React.useState()
  const [editableCd, setEditableCd] = React.useState()
  const [isFormAddCdOpen, setIsAddCdFormOpen] = React.useState(false)
  const [isFormEditCdOpen, setIsEditFormOpen] = React.useState(false)
  const db = getFirestore(fireStoreApp);

  React.useEffect(() => {
    getLibrary();
  }, [])

  async function getLibrary() {
    let newCdList = [];
    const querySnapshot = await getDocs(collection(db, "cd's"));
    querySnapshot.forEach(cdDoc => {
      newCdList.push(cdDoc.data())
    })
    setCdList(newCdList)
  }

  function handleChange(event) {
    event.stopPropagation();
    const { name, value } = event.target;
    setCd(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  function handleEditChange(event) {
    event.stopPropagation();
    const { name, value } = event.target;
    setEditableCd(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  async function addCd(e) {
    e.stopPropagation();
    e.preventDefault();
    const newCdRef = await addDoc(collection(db, "cd's"), cd);
    await setDoc(newCdRef, { ...cd, id: newCdRef.id });
    setCdList(prev => prev.concat({ ...cd, id: newCdRef.id }))
    setIsAddCdFormOpen(false)
  }

  async function deleteCd(e, id) {
    e.stopPropagation();
    await deleteDoc(doc(db, "cd's", id));
    setCdList(prev => prev.filter(cd => cd.id !== id))
  }

  async function editCd(e, id) {
    e.stopPropagation();
    e.preventDefault();
    const cdRef = doc(db, "cd's", id);
    setDoc(cdRef, editableCd);
    setCdList(prev => {
      let newList = prev.map(cd => {
        if (cd.id === id) return editableCd
        return cd;
      })
      return newList;
    })
    setIsEditFormOpen(false)

  }

  function openEditForm(id) {
    setEditableCd(cdList.find(cd => cd.id === id))
    setIsEditFormOpen(true)
  }

  function openAddCdForm() {
    setIsAddCdFormOpen(true)
  }

  return (
    <div className="container">
      <Library handleChange={handleChange} deleteCd={deleteCd} openEditForm={openEditForm} openForm={openAddCdForm} cdList={cdList}>
      </Library>
      {isFormAddCdOpen && <Overlay onClick={() => { setIsAddCdFormOpen(false) }}></Overlay>}
      {isFormAddCdOpen && <AddCdForm handleChange={handleChange} addCd={addCd}></AddCdForm>}
      {isFormEditCdOpen && <Overlay onClick={() => { setIsEditFormOpen(false) }}></Overlay>}
      {isFormEditCdOpen && <EditCdForm editableCd={editableCd} handleEditChange={handleEditChange} editCd={editCd}></EditCdForm>}
    </div>
  );
}


const Overlay = styled.div`
position: fixed;
top: 0;
width: 100%;
height: 100%;
background-color: black;
opacity: 0.6;
transition: left 0.85s ease-in-out;
`

export default App;
