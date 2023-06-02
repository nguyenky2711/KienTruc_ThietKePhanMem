import React from 'react'
import SearchTitle from '../components/RightComponents/List/SearchTitle'
import HeaderList from '../components/RightComponents/List/HeaderList';
import ListItem from '../components/RightComponents/List/ListItem';

const CheckSecurity = () => {
  const data = [
    {
      id:1,
      cameraImg: `https://picsum.photos/id/100/150/150`,
      cameraName: 'Camera 1',
      cameraPosition: 'Park 1',
    },
    {
      id:2,
      cameraImg: 'https://picsum.photos/id/200/150/150',
      cameraName: 'Camera 2',
      cameraPosition: 'Park 1',
    },
    {
      id:3,
      cameraImg: 'https://picsum.photos/id/300/150/150',
      cameraName: 'Camera 3',
      cameraPosition: 'Park 1',
    },
    {
      id:4,
      cameraImg: 'https://picsum.photos/id/400/150/150',
      cameraName: 'Camera 4',
      cameraPosition: 'Park 1',
    },
    {
      id:5,
      cameraImg: 'https://picsum.photos/id/500/150/150',
      cameraName: 'Camera 1',
      cameraPosition: 'Park 2',
    },
    {
      id:6,
      cameraImg: 'https://picsum.photos/id/600/150/150',
      cameraName: 'Camera 2',
      cameraPosition: 'Park 2',
    },
    {
      id:7,
      cameraImg: 'https://picsum.photos/id/700/150/150',
      cameraName: 'Camera 3',
      cameraPosition: 'Park 2',
    },
    {
      id:8,
      cameraImg: 'https://picsum.photos/id/800/150/150',
      cameraName: 'Camera 4',
      cameraPosition: 'Park 2',
    },
  ]
  return (
    <div style={{flexBasis:'75%'}}>
      <SearchTitle title={"Kiểm tra an ninh"} search={true} />
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