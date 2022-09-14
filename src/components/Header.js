import img from '../images/stock.png';

function Header() {
  return (
    <div className="header">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h3>2022-09-13</h3>
        <span>-6.06</span>
      </div>
    </div>
  );
}

export default Header;
