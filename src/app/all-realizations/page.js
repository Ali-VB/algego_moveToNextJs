"use client"
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog'
import { IconButton, Toolbar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import DialogComp from '@/components/DilogComp'
import RealisationComp from '@/components/RealisationComp';

const getAllRealizations = async () => {
    const res = await fetch('https://gestion.contenu.algego.com/wp-json/wp/v2/realisation?per_page=100');
    const data = await res.json();
    return data;
}

export default async function AllRealizations() {
   
    // const [realisations, setRealizations] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedReal, setSelectedReal] = useState(null);

    const realisations = await getAllRealizations();
    
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = await getAllRealizations();
    //             setRealizations(data);
    //         } catch (error) {
    //             console.error('Error fetching realizations:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    const handleClickOpen = (eachReal) => {
        setSelectedReal(eachReal);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  
    return (
        <>
            <div className='row'>
                {realisations.map((real, index) => (
                    <div
                        key={real.id}
                        className={
                            index === 1 || index === 4 || index === 7 || index === 10 || index === 13
                                ? 'col-12 col-sm-6 col-lg-4'
                                : 'col-12 col-sm-6 col-lg-4 realisationMarginTop'
                        }
                    >
                        <div
                            data-aos='zoom-in'
                            data-aos-duration='1000'
                            data-aos-delay={
                                index === 0 || index === 3 || index === 6 || index === 9 || index === 12
                                    ? '0'
                                    : index === 1 || index === 4 || index === 7 || index === 10 || index === 13
                                        ? '200'
                                        : '400'
                            }
                            data-aos-once='true'
                            className='realisationPage'
                        >
                            <RealisationComp
                                imageLink={real.acf.image_de_realisation.url}
                                client={real.acf.realisation_client}
                                category={real.acf.realisation_categorie}
                                openDialogFunc={() => handleClickOpen(real)}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Slide}
                transitionDuration={800}
            >
                <Toolbar>
                    <IconButton edge='start' color='inherit' onClick={handleClose} aria-label='close'>
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                {selectedReal && (
                    <DialogComp
                        category={selectedReal.acf.realisation_categorie}
                        client={selectedReal.acf.realisation_client}
                        mandat={selectedReal.acf.texte_de_dialog.mandat}
                        defi={selectedReal.acf.texte_de_dialog.defi}
                        solutions={selectedReal.acf.texte_de_dialog.solutions}
                        type={selectedReal.acf.media_de_dialog_box.selectionner_le_type_de_media}
                        videoLink={selectedReal.acf.media_de_dialog_box.lien_video}
                        imageLink={selectedReal.acf.media_de_dialog_box.lien_image}
                        iframeVideo={selectedReal.acf.media_de_dialog_box.iframe_video}
                    />
                )}
            </Dialog>
        </>
    );
}
