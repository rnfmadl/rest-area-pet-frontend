import React from 'react';




function FacilityList({ facilities }) {
  return (
    <div>

<ul>
  {facilities.map((facility, index) => (
    <li key={index}>
      <h3>{facility.name}</h3>
      <p>설치연도: {facility.설치연도}</p>
      <p>운영시간: {facility.운영시간}</p>
      <p>종류: {facility.종류}</p>
      <p>휴장일: {facility.휴장일}</p>
      <p>위치: {facility.위치}</p>
      <hr/>
    </li>
  ))}
</ul>
    </div>
  );
}

export default FacilityList;