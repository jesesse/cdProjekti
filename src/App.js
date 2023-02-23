import styled from "styled-components";
import React from "react";
import Library from "./components/Library";
import AddCdForm from "./components/AddCdForm";
import './styles/main.css'

import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

function App({ fireStoreApp }) {

  const [cdList, setCdList] = React.useState([])
  const [cd, setCd] = React.useState({ id: new Date().getMilliseconds().toString() })
  const [isFormOpen, setIsFormOpen] = React.useState(false)

  function openForm() {
    setIsFormOpen(true)
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setCd(prev => {
      return {
        ...prev,
        [name]: value
      }
    })

  }

  const db = getFirestore(fireStoreApp);

  async function addCd(e) {

    e.preventDefault();
    setCdList(prev => prev.concat(cd))
    setCd({
      id: new Date().getMilliseconds().toString()
    })
    setIsFormOpen(false)

    try {
      const docRef = await addDoc(collection(db, "cd's"), {
        artist: cd.artist,
        title: cd.title,
        listened: cd.listened,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  function deleteCd(e, id) {
    e.stopPropagation()
    setCdList(prev => prev.filter(cd => cd.id !== id))
  }


  return (
    <div className="container">
      <Library deleteCd={deleteCd} openForm={openForm} cdList={cdList}>
      </Library>
      {isFormOpen && <Overlay onClick={() => { setIsFormOpen(false) }}></Overlay>}
      {isFormOpen && <AddCdForm handleChange={handleChange} addCd={addCd}></AddCdForm>}
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
