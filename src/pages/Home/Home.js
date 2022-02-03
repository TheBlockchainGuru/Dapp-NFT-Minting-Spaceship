import './Home.scss';
import HomeImage from '../../assets/images/Group 2 1.png';
import BattleImage from '../../assets/images/Battle.png';
import PositionImage from '../../assets/images/Proposition2 1.png';
import VolcanoImage from '../../assets/images/Volcano_extraction 2 (1) 1.png';
import Card from './Card';

const nfts = [
    [
        {
            title: 'NFT AB11234',
            state: 0,
            index: 0
        }, 
        {
            title: 'NFT CD9856t',
            state: 0,
            index: 1
        }
    ],[
        {
            title: 'NFT AB11234',
            state: 0,
            index: 0
        }, 
        {   
            title: 'NFT CD9856t',
            state: 0,
            index: 1
        }
    ],[
        {
            title: 'NFT AB11234',
            state: 0,
            index: 0
        },
        {
            title: 'NFT CD9856t',
            state: 0,
            index: 1
        }
    ],
]

// const nfts = [
//     {
//         title: 'NFT AB11234',
//         state: 0,
//         index: 0
//     }, 
//     {
//         title: 'NFT CD9856t',
//         state: 0,
//         index: 1
//     }
// ]

let temp = []

const cards = [
    {
        image: VolcanoImage,
        apy: '175.29% APY',
        editions: '40/40 editions',
        title: 'Planet AB123',
        earned: '0.00 ETH Earned',
        earnedResult: '$ 0.00',
        index : 0
    },
    {
        image: BattleImage,
        apy: '175.29% APY',
        editions: '40/40 editions',
        title: 'Planet AB123',
        earned: '0.00 ETH Earned',
        earnedResult: '$ 0.00',
        index : 1
    },
    {
        image: PositionImage,
        apy: '175.29% APY',
        editions: '40/40 editions',
        title: 'Planet AB123',
        earned: '0.00 ETH Earned',
        earnedResult: '$ 0.00',
        index : 2
    }
]

const Home = () => {

    let index = 0
    return (
        <div className="home">
            <div className="image-container">
                <img src={HomeImage} />
                <div className="dashboard-text">
                    <div className="dashboard-header">Stake Your NFT</div>
                    <div className="dashboard-content">Earn tokens at high APYs by minting and farming our official NFTs.</div>
                </div>
            </div>
            <div className="cards">
            {cards.map( e => 
                <Card 
                    key={index ++}
                    image={e.image}
                    apy={e.apy}
                    editions={e.editions}
                    title={e.title}
                    earned={e.earned}
                    earnedResult={e.earnedResult}
                    nfts={nfts[e.index]}
                />
            )}
            </div>
        </div>
    );
}

export default Home;