import React, {useEffect, useState} from "react";
// import "../../../styles/list.css";
import {Form, FormGroup, Input, Label} from "reactstrap";
import SearchTitle from "../components/RightComponents/List/SearchTitle";
import HeaderList from "../components/RightComponents/List/HeaderList";
import ListItem from "../components/RightComponents/List/ListItem";
import "../styles/list.css";
import EmployeeDetail from "./EmployeeDetail";
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://aplonis-meln.alwaysdata.net');
const authData = await pb.collection('users').authWithPassword(
    'shanenoi.org@gmail.com',
    '32641270013264',
);

let listStaff = [];
const getStaffs = async () => {
    const records = await pb.collection('users').getFullList({
        sort: '-created',
    });
    let listStfs = [];
    records.forEach((record) => {
        let stf = {
            id: record.id,
            staffName: record.name,
            staffId: record.id,
            staffPhone: record.phone_number,
            staffStatus: record.status,
            staffCCCD: record.cccd,
            staffDayStart: record.start_time,
            staffAddress: record.address,
            staffDayEnd: record.end_time,
            role: record.role,
        }
        if (record.avatar !== "") {
            stf.staffImg = `https://aplonis-meln.alwaysdata.net/api/files/_pb_users_auth_/${record.id}/${record.avatar}`
        }
        listStfs.push(stf)
    })
    return listStfs
}
const refreshListStaffs = async () => {
    listStaff = await getStaffs();
}

await refreshListStaffs()

// import Font
const AllEmployee = () => {
    const status = [
        {
            id: 1,
            name: "Đang làm việc",
        },
        {
            id: 2,
            name: "Đã nghỉ",
        },
    ];
    const [staffData, setStaffData] = useState({
        staffImg: "https://picsum.photos/150/250",
        staffName: "Nguyen Van A",
        staffId: "Abc123",
        staffPhone: "012213123",
        staffStatus: "Đang làm việc",
        staffCCCD: "0123123141",
        staffDayStart: "12/05/2020",
        staffAddress: "Thủ đức",
        staffDayEnd: "",
        role: "Nhân viên",
    });
    const [newStaffData, setNewStaffData] = useState({
        // id:'',
        staffName: "",
        staffId: "",
        staffPhone: "",
        staffStatus: "",
        staffCCCD: "",
        staffDayStart: "",
        staffAddress: "",
        staffDayEnd: "",
        role: "",
        staffImg: "",
    });
    const [id, setId] = useState(5);
    const [disable, setDisable] = useState(true);
    const [selectedItemData, setSelectedItemData] = useState({});
    const [form, setForm] = useState(false);
    const [activate, setActivate] = useState(false);
    const [addForm, setAddForm] = useState(false);
    const [data, setData] = useState(listStaff);
    const handleBackClick = () => {
        setForm(false);
    };
    const handleRemove = () => {
        setActivate(!activate);
    };
    const handleAdd = () => {
        setAddForm(true);
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setNewStaffData((prevData) => ({
            ...prevData,
            staffImg: `https://picsum.photos/id/${id}/65/65`,
            id: id,
            [name]: value,
        }));
    };

    const create_staff = (newStaffData) => {
        // xử lý thêm

        console.log(newStaffData)
        // setAddForm(false);

        // e.preventDefault();
        // setId(id + 1);
        // setData((prevData) => prevData.concat(newStaffData));
    };

    const handleSelectedItem = (item, index) => {
        setSelectedItemData(item);
        setSelectedItemData((preData) => ({
            ...preData,
            index: index,
        }));
        setForm(true);
    };
    useEffect(() => {
    }, [addForm, form]);
    return (
        <div className="container-list" style={{flexBasis: "75%"}}>
            <SearchTitle title={"Quản lý nhân viên"} search={true}/>

            {form ? (
                <EmployeeDetail
                    item={selectedItemData}
                    status={status}
                    onBackClick={handleBackClick}
                />
            ) : addForm ? (
                <div className="form-cover">
                    <div className="staff-infor">
                        <img src={`https://picsum.photos/id/${id}/65/65`} alt=""/>
                        <div className="infor">
                            <Form className="" onSubmit={create_staff}>
                                <FormGroup className="infor-item">
                                    <Label for="exampleText">Tên nhân viên</Label>
                                    <Input
                                        type="text"
                                        name="staffName"
                                        id="exampleText"
                                        onChange={handleChange}
                                        // value={staffData.staffName}
                                        // disabled={disable}
                                    />
                                </FormGroup>
                                <FormGroup className="infor-item">
                                    <Label for="exampleText">Mã số nhân viên</Label>
                                    <Input
                                        type="text"
                                        name="staffId"
                                        id="exampleText"
                                        onChange={handleChange}
                                        // value={staffData.staffId}
                                        // disabled={disable}
                                    />
                                </FormGroup>
                                <FormGroup className="infor-item">
                                    <Label for="exampleText">Số điện thoại</Label>
                                    <Input
                                        type="text"
                                        name="staffPhone"
                                        id="exampleText"
                                        onChange={handleChange}
                                        // value={staffData.staffPhone}
                                        // disabled={disable}
                                    />
                                </FormGroup>
                                <FormGroup className="infor-item">
                                    <Label for="exampleText">Trạng thái</Label>
                                    <Input
                                        type="select"
                                        name="staffStatus"
                                        id="exampleSelect"
                                        onChange={handleChange}
                                        // value={staffData.staffStatus}
                                        disabled={disable}
                                    >
                                        {status.map((item, index) => {
                                            return <option>{item.name}</option>;
                                        })}
                                    </Input>
                                </FormGroup>
                                <FormGroup className="infor-item">
                                    <Label for="exampleText">CCCD</Label>
                                    <Input
                                        type="text"
                                        name="staffCCCD"
                                        id="exampleText"
                                        onChange={handleChange}
                                        // value={staffData.staffCCCD}
                                        // disabled={disable}
                                    />
                                </FormGroup>
                                <FormGroup className="infor-item">
                                    <Label for="exampleText">Ngày bắt đầu đi làm</Label>
                                    <Input
                                        type="text"
                                        name="staffDayStart"
                                        id="exampleText"
                                        onChange={handleChange}
                                        // value={staffData.staffDayStart}
                                        // disabled={disable}
                                    />
                                </FormGroup>
                                <FormGroup className="infor-item">
                                    <Label for="exampleText">Địa chỉ</Label>
                                    <Input
                                        type="text"
                                        name="staffAddress"
                                        id="exampleText"
                                        onChange={handleChange}
                                        // value={staffData.staffAddress}
                                        // disabled={disable}
                                    />
                                </FormGroup>
                                <FormGroup className="infor-item">
                                    <Label for="exampleText">Ngày kết thúc làm việc</Label>
                                    <Input
                                        type="text"
                                        name="staffDayEnd"
                                        id="exampleText"
                                        onChange={handleChange}
                                        // value={staffData.staffDayEnd}
                                        disabled={disable}
                                    />
                                </FormGroup>
                                <FormGroup className="infor-item">
                                    <Label for="exampleText">Chức vụ</Label>
                                    <Input
                                        type="text"
                                        name="role"
                                        id="exampleText"
                                        onChange={handleChange}
                                        // value={staffData.role}
                                        // disabled={disable}
                                    />
                                </FormGroup>
                            </Form>
                            <div className="buttons">
                                <button type="button" onClick={() => create_staff(newStaffData)}>
                                    Thêm bãi xe
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* <button onClick={formOn}>{!formStatus? ('Thay đổi thông tin'):('Lưu thông tin')} </button> */}
                </div>
            ) : (
                <div className="list-cover">
                    <HeaderList
                        title={"Danh sách nhân viên"}
                        object={"Nhân viên"}
                        handleRemove={handleRemove}
                        handleAdd={handleAdd}
                        removeBtn_on={true}
                        addBtn_on={true}
                    />
                    <div className="body-list">
                        {data.map((item, index) => {
                            return (
                                <ListItem
                                    item={item}
                                    activateRemoveBtn={activate}
                                    category={"employee"}
                                    onClick={() => handleSelectedItem(item, index)}
                                ></ListItem>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllEmployee;
