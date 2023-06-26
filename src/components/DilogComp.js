import React from 'react'
import LogoBlack from '../images/circle-black.png'
// import ContactForm from "./ContactForm"

const DialogComp = (props) => {
    function markupForVideoLink() {
        return { __html: props.videoLink };
    }
    function markupForMandat() {
        return { __html: props.mandat };
    }
    function markupForDefi() {
        return { __html: props.defi };
    }
    function markupForSolution() {
        return { __html: props.solutions };
    }
    return (
        <>
            <div className='container dialogWrapper'>
                <h1 className='dialogTitle'>{props.category}</h1>
                <div className='dialogSubtitle'>{props.client}</div>
                <div className='dialogFirstDesc'>
                    {props.videoLink ? <div className='clipPlayerSite' dangerouslySetInnerHTML={markupForVideoLink()}></div> :
                        props.iframeVideo ? <iframe className="dialogImg" src={props.iframeVideo} width="560" height="315" frameborder="0" allow="autoplay" title=""></iframe> :
                            <div style={{ maxWidth: 555 }}><img className='dialogImg' src={props.imageLink} alt={props.client} width="565" /></div>}
                </div>
                <div className='dialogDescription dialogDescriptionTitle'>Mandat</div>
                <div className='dialogDescription' dangerouslySetInnerHTML={markupForMandat()}></div>
                <div className='dialogDescription dialogDescriptionTitle'>Défi</div>
                <div className='dialogDescription' dangerouslySetInnerHTML={markupForDefi()}></div>
                <div className='dialogDescription dialogDescriptionTitle'>Solutions</div>
                <div className='dialogDescription' dangerouslySetInnerHTML={markupForSolution()}></div>
                <div className='categoryImg'><img src={LogoBlack} alt='logo' />{props.category}</div>
                <div className='accordion' id="dialogAccordion">
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <span className="accordionTxt">Jasons ensemble !</span>
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#dialogAccordion">
                            <div className="card-body">
                                {/* <ContactForm /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DialogComp