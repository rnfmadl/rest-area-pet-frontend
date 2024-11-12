import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import React, { useState } from 'react';

// 지도 컨테이너 스타일
const containerStyle = {
  width: '100%',
  height: '800px',
};

// 휴게소 데이터 
const facilities = [
  {
    id: 1,
    name: "덕평",
    location: { lat: 37.2107, lng: 127.3716 },
    imgUrl : "/dukpyeong.png",
  },
  {
    id: 2,
    name: "충주(양평)",
    location: { lat: 37.0122, lng: 127.9499 },
    imgUrl : "/choongjoo.png",
  },
  {
    id: 3,
    name: "단양팔경(부산)",
    location: { lat: 36.9822, lng: 128.3658 },
    imgUrl : "/danyangpalgyeong.png",
  },
  {
    id: 4,
    name: "금왕(제천)",
    location: { lat: 36.9775, lng: 127.6471 },
    imgUrl : "/geumwang.png",
  },
  {
    id: 5,
    name: "화서(영덕)",
    location: { lat: 36.9655, lng: 128.4895 },
    imgUrl : "/hwaseo.png",
  },
  {
    id: 6,
    name: "죽암(서울)",
    location: { lat: 36.7358, lng: 127.4474 },
    imgUrl : "/joogam.png",
  },
  {
    id: 7,
    name: "서산(목포)",
    location: { lat: 36.8252, lng: 126.3911 },
    imgUrl : "/seosan.png",
  },
  {
    id: 8,
    name: "군산(서울)",
    location: { lat: 35.9679, lng: 126.7366 },
    imgUrl : "/goonsan.png",
  },
  {
    id: 9,
    name: "진주(부산)",
    location: { lat: 35.1232, lng: 128.0607 },
    imgUrl : "/jinjoo.png",
  },
  {
    id: 10,
    name: "신탄진(서울)",
    location: { lat: 36.4026, lng: 127.4045 },
    imgUrl : "/sintanjin.png",
  },
  {
    id: 11,
    name: "매송(목포)",
    location: { lat: 37.2111, lng: 126.8512 },
    imgUrl : "/maesong.png",
  },
  {
    id: 12,
    name: "매송(서울)",
    location: { lat: 37.2082, lng: 126.8544 },
    imgUrl : "/maesong2.png",
  },
  {
    id: 13,
    name: "마장",
    location: { lat: 37.5675, lng: 127.1807 },
    imgUrl : "/majang.png",
  },
  {
    id: 14,
    name: "용인(강릉)",
    location: { lat:37.2343, lng: 127.2034},
    imgUrl : "/youngin.png",
    
  },
  {
    id: 15,
    name: "가평",
    location: { lat: 37.8556, lng: 127.4801 },
    imgUrl : "/gapyeong.png",
    
  }


];

// 지도 중심 설정
const center = {
  lat: 36.3504,
  lng: 127.3845,
};

// 지도 이미지 스타일

const imgStyle = {
  width : '300px',
  height: '300px',
}

function Map() {
  const [selectedFacility, setSelectedFacility] = useState(null);

  return (
    <div>
      <h2> 지도로 보는 반려동물 휴게소 </h2>
    <LoadScript googleMapsApiKey="AIzaSyDulRY9YEKdhtRS1Hq2tSSIGMcdeOobX78">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
      {facilities.map((facility) => (
            <Marker
              key={facility.id}
              position={facility.location}
              title={facility.name}
              icon={selectedFacility?.id === facility.id 
                ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png"  // 선택된 마커 스타일
                : "http://maps.google.com/mapfiles/ms/icons/red-dot.png"}  // 일반 마커 스타일
              onClick={() => setSelectedFacility(facility)} // 마커 클릭 시 시설 선택
            />
          ))}

        {/* 마커 클릭 시 InfoWindow 표시 */}
        {selectedFacility && (
          <InfoWindow
            position={selectedFacility.location}
            onCloseClick={() => setSelectedFacility(null)} // InfoWindow 닫기
          >
            <div>
              <h4>{selectedFacility.name}</h4>
              <p>
              <img 
                    src={selectedFacility.imgUrl} 
                    alt={`${selectedFacility.name} 이미지`} 
                    style={imgStyle} 
                  />
              </p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
    </div>
  );
}

export default Map;
