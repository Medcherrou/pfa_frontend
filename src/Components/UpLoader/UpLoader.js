import '../Styles/UpLoader.css';
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import { useState } from 'react'
import { Box } from '@mui/material'
function UpLoader() {

    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No selected file")

  return (
    <Box className="container">
        <form onClick={() => document.querySelector(".input-field").click()} >
            <input type="file" accept='image/*' className='input-field' hidden 
                onChange={({target: {files}}) =>{
                    files[0] && setFileName(files[0].name)
                    if(files){
                        setImage(URL.createObjectURL(files[0]))
                    }
                }}
            />
            {
                image ?
                <img src={image} width={160} height={160} alt={fileName} /> :
                <>
                    <MdCloudUpload color='#1475cf' size={60} />
                    <p>Parcourir les fichiers à télécharger</p>
                </>
            }
        </form>
        <section className='uploaded-row'>
            <AiFillFileImage color='#1475cf' />
            <span className='upload-content'>
                {fileName} - 
                <MdDelete 
                    onClick={() => {
                        setFileName("Aucun fichier sélectionné")
                        setImage(null)
                    }}
                />
            </span>
        </section>
    </Box>
  )
}

export default UpLoader