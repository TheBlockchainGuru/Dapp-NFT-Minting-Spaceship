import { useEffect, useState } from "react";
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

const StakeModal = ({open, onClose, nfts, setNft}) => {
    let index = 0
    // const [tempNft, setTemp] = useState([])
    const handleClose = () => {
        onClose()
    }

    const onToggle = (e, nftIndex) => {
        if(nfts[nftIndex].state == 0) {
            nfts[nftIndex].state = 1
            e.target.style.background = '#45737E'
            e.target.style.border = '2px solid #97BFC9'
        } else {
            nfts[nftIndex].state = 0
            e.target.style.background = '#25353E'
            e.target.style.border = '2px solid #304152'
        }
    }

    const onStake = () => {
        setNft(nfts)
        onClose()
    }

    return (
        <Modal
            ariaHideApp={false}
            isOpen={open}
            onRequestClose={handleClose}
            style={customStyles}
        >
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: '40px',
                gap: '20px',
            }}>
                <div style={{
                    fontWeight: 500,
                    fontSize: '24px',
                    lineHeight: '20px',
                    letterSpacing: '0.05em',
                    color: '#FFFFFF',
                }}>NFT to be staked</div>
                <div onClick={handleClose}>x</div>
            </div>
            <div style={{
                padding: '27px 0px 14px 0px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
            }}>
                {
                    nfts.length && nfts.find(ele => ele.state == 0) 
                    ?
                        nfts.map(e => 
                            <div key={index ++}>
                                {e.state == 0 
                                ?   <div style={{
                                        background: '#25353E',
                                        border: '2px solid #304152',
                                        boxSizing: 'border-box',
                                        borderRadius: '13px',
                                        fontSize: '22px',
                                        lineHeight: '35px',
                                        textAlign: 'center',
                                        letterSpacing: '0.03em',
                                        padding: '16px 130px',

                                        color: '#FFFFFF',
                                        cursor: 'pointer'
                                    }} onClick={(ele) => onToggle(ele, e.index )}> 
                                        {e.title}
                                    </div>
                                :   <></>
                                }
                            </div>
                        )
                    :   <div 
                            style={{
                                background: '#25353E',
                                border: '2px solid #304152',
                                boxSizing: 'border-box',
                                borderRadius: '13px',
                                fontSize: '22px',
                                lineHeight: '35px',
                                textAlign: 'center',
                                letterSpacing: '0.03em',
                                padding: '16px 130px',

                                color: '#FFFFFF',
                                cursor: 'pointer'
                            }}
                        > There's no NFTs to be staked </div>
                }
            </div>
            <div style={{
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
                    cursor: 'pointer',

                }} onClick={onStake}>Stake</div>
                <div style={{
                    background: 'linear-gradient(90deg, #2D7CAA 0%, #3B47A5 100%)',
                    borderRadius: '13px',
                    textAlign: 'center',
                    padding: '16px 0px',
                    flex : 'auto',
                    cursor: 'pointer',
                    
                }} onClick={handleClose}>Cancel</div>
            </div>
        </Modal>
    );
}

export default StakeModal;