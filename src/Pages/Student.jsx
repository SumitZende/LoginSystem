import Sidebar from "../component/sidebar"
import StudentTable from "../component/StudentTable"

export default function Student() {
  return (
    <div className="flex">
        <Sidebar/>
        <StudentTable/>
    </div>
  )
}
