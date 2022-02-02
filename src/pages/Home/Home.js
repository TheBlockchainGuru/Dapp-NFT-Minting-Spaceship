import './Home.scss';
import HomeImage from '../../assets/images/Group 2 1.png';
import BattleImage from '../../assets/images/Battle.png';
import PositionImage from '../../assets/images/Proposition2 1.png';
import VolcanoImage from '../../assets/images/Volcano_extraction 2 (1) 1.png';

const cards = [
    {
        image: VolcanoImage,
        apy: '175.29% APY',
        editions: '40/40 editions',
        title: 'Planet AB123',
        earned: '0.00 ETH Earned',
        earnedResult: '$ 0.00'
    },
    {
        image: BattleImage,
        apy: '175.29% APY',
        editions: '40/40 editions',
        title: 'Planet AB123',
        earned: '0.00 ETH Earned',
        earnedResult: '$ 0.00'
    },
    {
        image: PositionImage,
        apy: '175.29% APY',
        editions: '40/40 editions',
        title: 'Planet AB123',
        earned: '0.00 ETH Earned',
        earnedResult: '$ 0.00'
    }
]
const Home = () => {

    let index = 0

    return (
        <div className="home">
            <div className="image-container">
                <img src={HomeImage} />
            </div>
            <div className="cards">
            {cards.map( e => 
                <div className="card" key={index ++}>
                    <div className="card-preview">
                        <img src={ e.image } />
                        <div className="card-title">{e.title}</div>
                        <div className="card-info">
                            <div className="card-apy">{e.apy}</div>
                            <div className="card-edition">{e.editions}</div>
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="card-result">
                            <div className="card-earned">{e.earned}</div>
                            <div className="card-earned-result">{e.earnedResult}</div>
                        </div>
                        <div className="card-operation">
                            <div className="card-stake-button">Stake</div>
                            <div className="card-harvest-button">Harvest</div>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
}

export default Home;