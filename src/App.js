import "antd/dist/antd.css";
import "./App.css";
import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "Robert Fox",
      class: "8th",
      result: "Success",
      score: 80,
      grade: "Excellent",
    },
    {
      id: 2,
      name: "Ralph Idwards",
      class: "9th",
      result: "Failed",
      score: 65,
      grade:"Averge",
    },
    {
      id: 3,
      name: "Ester Howard",
      class: "7th",
      result: "Success",
      score: 95,
      grade: "Excellent",
    },
    {
      id: 4,
      name: "Elonar Pora",
      class: "6th",
      result: "Success",
      score: 85,
      grade: "Excellent",
    },
    {
      id: 5,
      name: "Arlena Mccoy",
      class: "7th",
      result: "Success",
      score: 75,
      grade: "Excellent",
    },
    {
      id: 6,
      name: "Marvin Mecony",
      class: "8th",
      result: "Failed",
      score: 25,
      grade: "poor",
    },
    {
      id: 7,
      name: "Wade warren",
      class: "9th",
      result: "Success",
      score: 90,
      grade: "Excellent",
    }
  ]);
  const columns = [
    {
      key: "1",
      title: "NO.",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Student Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Class",
      dataIndex: "class",
    },
    {
      key: "4",
      title: "Result",
      dataIndex: "result",
    },
    {
      key: "5",
      title: "Score",
      dataIndex: "score",
    },
    {
      key: "6",
      title: "Grade",
      dataIndex: "grade",
    },
    {
      key: "7",
      title: "Edit  Delete",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditStudent(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ color: "red", marginLeft: 25 }}
            />
          </>
        );
      },
    },
  ];

  const onAddStudent = (e) => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newStudent = {
      id: randomNumber,
      name: "Name " + randomNumber,
      class: randomNumber + "@gmail.com",
      result: "Address " + randomNumber,
    };
    setDataSource((pre) => {
      return [...pre, newStudent];
    });
  };
  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to remove the current student from the list ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((student) => student.id !== record.id);
        });
      },
    });
  };
  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };
  return (
    <>
    <div className="total">
    <div className="classSpace">
          <h1>School Space</h1>
          <div className="dashboard" >Dashboard</div>
          <div className="courses">Courses</div>
          <div className="students">Students</div>
          <div className="exams">Exams</div>
          <div className="results">Results</div>
          <div className="noticeboard">NoticeBoard</div>
          <div className="liveclasses">LiveClasses</div>
          <div className="notifications">Notifications</div>
        </div>
       <div className="addStudent">
       <Button onClick={onAddStudent}> + ADD </Button>
       </div>
       <div className="student">Student</div>
    <div className="App">

      <header >
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title="Edit Student"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((student) => {
                if (student.id === editingStudent.id) {
                  return editingStudent;
                } else {
                  return student;
                }
              });
            });
            resetEditing();
          }}
        >
          <h5>STUDENT NAME*</h5>
          <Input
            value={editingStudent?.name}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
          <h5>CLASS*</h5>
          <Input
            value={editingStudent?.class}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, class: e.target.value };
              });
            }}
          />
          <h5>GRADE*</h5>
          <Input
            value={editingStudent?.result}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, result: e.target.value };
              });
            }}
          />
        </Modal>
      </header>
    </div>
    </div>

    
    </>

  );
}

export default App;