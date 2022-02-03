import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'linear-gradient(121.12deg, #1A3846 1.71%, #1D2A31 121.88%)',
        borderRadius: '20px',
        border: 0,
        color: '#FFFFFF',
        padding: '35px 27px 66px 27px',
    },
};

const HarvestModal = ({open, onClose}) => {

    const [step, setStep] = useState(1)

    const initStep = () => {
        setStep(1);
    }

    const onNext = () => {
        setStep(2);
    }

    const handleClose = () => {
        onClose();
    }

    return (
        <Modal
            ariaHideApp={false}
            isOpen={open}
            onRequestClose={handleClose}
            style={customStyles}
            onAfterClose={initStep}
        >
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: '40px',
            }}>
                <div style={{
                    fontWeight: 500,
                    fontSize: '24px',
                    lineHeight: '20px',
                    letterSpacing: '0.05em',
                    color: '#FFFFFF',
                }}>Harvest</div>
                <div onClick={handleClose}>x</div>
            </div>
            <div style={{
                background: '#25353E',
                border: '2px solid #304152',
                boxSizing: 'border-box',
                borderRadius: '13px',
                padding: '27px 100px 14px 100px',
            }}>
                <div style={{
                    fontWeight: 500,
                    fontSize: '30px',
                    lineHeight: '35px',
                    textAlign: 'center',
                    letterSpacing: '0.03em',
                    color: '#D5E7EC',
                    paddingBottom: '9px'
                }}>0.50 WETh Earned</div>
                <div style={{
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '35px',
                    textAlign: 'center',
                    letterSpacing: '0.03em',
                    
                    color: '#D5E7EC',
                }}>$2604.9</div>
            </div>
            {step == 1
            ?   <div style={{
                    paddingTop: '36px',
                    display: 'flex',
                    gap: '18px',
                }}>
                    <div style={{
                        background: 'linear-gradient(90deg, #2C86D9 4.08%, #4EB8F4 27.3%, #3CCBC2 100%)',
                        borderRadius: '13px',
                        textAlign: 'center',
                        padding: '16px 0px',
                        flex : 'auto',
                        cursor: 'pointer'

                    }} onClick={onNext}>Approve Armstrong Wrapped Ether</div>
                    <div style={{
                        background: 'linear-gradient(90deg, #2D7CAA 0%, #3B47A5 100%)',
                        borderRadius: '13px',
                        textAlign: 'center',
                        padding: '16px 0px',
                        flex : 'auto',
                        cursor: 'pointer',
                        
                    }} onClick={handleClose}>Cancel</div>
                </div>
            :   <div style={{
                    padding: '36px 20px 0px 20px',
                    display: 'flex',
                    gap: '18px',
                }}>
                    <div style={{
                        background: 'linear-gradient(90deg, #2C86D9 4.08%, #4EB8F4 27.3%, #3CCBC2 100%)',
                        borderRadius: '13px',
                        textAlign: 'center',
                        padding: '16px 0px',
                        flex : 'auto',

                    }}>Harvest</div>
                    <div style={{
                        background: 'linear-gradient(90deg, #2D7CAA 0%, #3B47A5 100%)',
                        borderRadius: '13px',
                        textAlign: 'center',
                        padding: '16px 0px',
                        flex : 'auto',
                        
                    }} onClick={handleClose}>Cancel</div>
                </div>  
            }
        </Modal>
    );
}

export default HarvestModal;