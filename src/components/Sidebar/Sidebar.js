import './Sidebar.scss';
import LogoImage from '../../assets/images/EXACTCOLOR 1.png';
import HomeIcon from '../Icons/HomeIcon';
import ChartIcon from '../Icons/ChartIcon';
import DiagramIcon from '../Icons/DiagramIcon';
import ExchangeIcon from '../Icons/ExchangeIcon';
import LogoutIcon from '../Icons/LogoutIcon';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="sidebar-links">
                    <div className="sidebar-item">
                        <img src={LogoImage} />
                    </div>
                    <div className="sidebar-item">
                        <HomeIcon />
                    </div>
                    <div className="sidebar-item">
                        <ChartIcon />
                    </div>
                    <div className="sidebar-item">
                        <DiagramIcon />
                    </div>
                    <div className="sidebar-item">
                        <ExchangeIcon />
                    </div>
                </div>
                <div className="sidebar-logout">
                    <LogoutIcon />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;