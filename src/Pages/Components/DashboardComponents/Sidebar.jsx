import { Link } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";

const Sidebar = () => {
const [, , isAdmin] = useAdmin();
console.log(isAdmin);
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      {/* <ul className="menu p-4 w-60 h-full bg-base-200">
        <li>
          <Link to="/dashboard/instructors/add-class">Add Classes</Link>
        </li>
        <li>
          <Link to="/dashboard/instructors/my-classes">My Class</Link>
        </li>
        <li>
          <Link to="/dashboard/student/selected-classes">Selected Classes</Link>
        </li>
        <li>
          <Link to="/dashboard/student/enrolled-classes">Enrolled Class</Link>
        </li>
        <li>
          <Link to="/dashboard/student/payment-history">Payment History</Link>
        </li>
        <li>
          <Link to="/dashboard/admin/manage-classes">Manage Classes</Link>
        </li>
        <li>
          <Link to="/dashboard/admin/manage-users">Manage Users</Link>
        </li>
      </ul> */}

      {/* ---------------------------------------------------*/}
      { isAdmin ? 
      <ul className="menu p-4 w-60 h-full bg-base-200">
        
        <li>
          <Link to="/dashboard/admin/manage-classes">Manage Classes</Link>
        </li>
        <li>
          <Link to="/dashboard/admin/manage-users">Manage Users</Link>
        </li>
      </ul>
      :
      <>
        <ul className="menu p-4 w-60 h-full bg-base-200">
        
        <li>
          <Link to="/dashboard/instructors/add-class">Add Classes</Link>
        </li>
        <li>
          <Link to="/dashboard/instructors/my-classes">My Class</Link>
        </li>
      </ul>

      <ul className="menu p-4 w-60 h-full bg-base-200">
        
        <li>
          <Link to="/dashboard/student/selected-classes">Selected Classes</Link>
        </li>
        <li>
          <Link to="/dashboard/student/enrolled-classes">Enrolled Class</Link>
        </li>
        <li>
          <Link to="/dashboard/student/payment-history">Payment History</Link>
        </li>
      </ul>
      </>
      }
      
    </div>
  );
};

export default Sidebar;
