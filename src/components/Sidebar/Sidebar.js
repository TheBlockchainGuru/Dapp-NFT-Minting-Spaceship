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
                        <a href="https://app.spacefalcon.com">
                            <img src={LogoImage} />
                        </a>
                    </div>
                    <div className="sidebar-item active" title="Coming soon">
                        <HomeIcon />
                    </div>
                    <div className="sidebar-item">
                        <ExchangeIcon />
                    </div>
                    <div className="sidebar-item" title="Coming soon">
                        <ChartIcon />
                    </div>
                    <div className="sidebar-item" title="Coming soon">
                        <DiagramIcon />
                    </div>
                </div>
                <div className="sidebar-logout">
                    <a href="https://spacefalcon.io">
                        <LogoutIcon />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;