import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className="menu p-4 w-60 h-full bg-base-200">
        {/* Sidebar content here */}
        <li>
          <Link to="/dashboard/instructors/add-class">Add Classes</Link>
        </li>
        <li>
          <Link to="/dashboard/instructors/my-classes">My Class</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
