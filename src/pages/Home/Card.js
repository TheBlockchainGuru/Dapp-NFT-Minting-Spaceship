import LogoSmall from '../../assets/images/EXACTCOLOR_small.png';
import { useEffect, useState } from 'react';
import HarvestModal from './HarvestModal';
import UnStakeModal from './UnStakeModal';
import StakeModal from './StakeModal';

const Card = (props) => {

    const [harvestModalIsOpen, setHarvestIsOpen] = useState(false);
    const [stakingModalIsOpen, setStakingIsOpen] = useState(false);
    const [unStakingModalIsOpen, setUnStakingIsOpen] = useState(false);
    const [nft, setNft] = useState(props.nfts)
    
    function openHarvestModal() {
        setHarvestIsOpen(true);
    }
  
    function closeHarvestModal() {
        setHarvestIsOpen(false);
    }

    function openStakingModal() {
        setStakingIsOpen(true);
    }

    function closeStakingModal() {
        setStakingIsOpen(false);
    }
       
    function openUnStakingModal() {
        setUnStakingIsOpen(true)
    }

    function closeUnStakingModal() {
        setUnStakingIsOpen(false)
    }

    function onNft(nftUpdate) {
        setNft(nftUpdate)
    }

    return (
        <>
            <div className="card">
                <div className="card-preview">
                    <img src={ props.image } />
                    <div className="card-title">{props.title}</div>
                    <div className="card-info">
                        <div className="card-apy">{props.apy}</div>
                        <div className="card-edition">{props.editions}</div>
                    </div>
                    <div className="card-logo">
                        <img src={LogoSmall} />
                    </div>
                </div>
                <div className="card-content">
                    <div className="card-result">
                        <div className="card-earned">{props.earned}</div>
                        <div className="card-earned-result">{props.earnedResult}</div>
                    </div>
                    <div className="card-deposit">
                        <div className="card-deposit-title">NFT Deposited</div>
                        {
                            nft.length && nft.find(e => e.state == 1) 
                            ?   <div className="nfts">
                                    <ul>
                                    {nft.map( ele => 
                                        ele.state == 1 
                                        ?   <li>{ele.title}</li>
                                        :   <></>
                                    )}
                                    </ul>
                                </div>
                            :   <div className="card-deposit-sub-title">There is no deposited NFT.</div>
                        }
                        {/* {temp[index] == undefined || temp[index].length == 0
                        ?   <div className="card-deposit-sub-title">There is no deposited NFT</div>
                        :    */}
                        
                        {/* } */}
                        <div className="card-deposit-controls">
                            <div className="card-deposit-minus" onClick={openUnStakingModal}>-</div>
                            <div className="card-deposit-plus" onClick={openStakingModal}>+</div>
                        </div>
                    </div>
                    <div className="card-operation">
                        <div className="card-stake-button">Stake</div>
                        <div className="card-harvest-button" onClick={openHarvestModal}>Harvest</div>
                    </div>
                </div>
            </div>
            <StakeModal 
                nfts={nft}
                open={stakingModalIsOpen}
                onClose={closeStakingModal}
                setNft={onNft}
            />
            <UnStakeModal 
                nfts={nft}
                open={unStakingModalIsOpen}
                onClose={closeUnStakingModal}
                setNft={onNft}
            />
            <HarvestModal 
                open={harvestModalIsOpen}
                onClose={closeHarvestModal}
            />
        </>
    )
}

export default Card;