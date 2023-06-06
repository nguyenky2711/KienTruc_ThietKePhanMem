import React from 'react'
import SearchTitle from '../components/RightComponents/List/SearchTitle'
import HeaderList from '../components/RightComponents/List/HeaderList';
import ListItem from '../components/RightComponents/List/ListItem';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://aplonis-meln.alwaysdata.net');
const authData = await pb.collection('users').authWithPassword(
    'shanenoi.org@gmail.com',
    '32641270013264',
);

let listCameras = [];
const getCameras = async () => {
    const records = await pb.collection('cameras').getFullList({
        sort: '-created',
    });
    let cameras = [];
    records.forEach((record) => {
        console.log(record)
        let cam = {
            id: record.id,
            cameraName: record.name,
            cameraPosition: record.area,
        }
        if (record.screen !== "") {
            cam.cameraImg = `https://aplonis-meln.alwaysdata.net/api/files/${record.collectionId}/${record.id}/${record.screen}?thumb=100x100`
        }
        cameras.push(cam)
    })
    return cameras
}
const refreshListCameras = async () => {
    listCameras = await getCameras();
}

await refreshListCameras()
const CheckSecurity = () => {
    let data = listCameras
    return (
        <div style={{flexBasis: '75%'}}>
            <SearchTitle title={"Kiểm tra an ninh"} search={true}/>
            <div className="list-cover">
                <HeaderList
                    title={"Danh sách Camera"}
                    object={"Nhân viên"}
                    removeBtn_on={false}
                    addBtn_on={false}
                />
                <div className="body-list">
                    {data.map((item, index) => {
                        return (
                            <ListItem item={item} activateRemoveBtn={false} category={'camera'}></ListItem>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default CheckSecurity