import FacilityList from "../FaciliityList";
import { facilities } from "../../../data/facilities";
import  {useState } from 'react';
import Button from "../ui/Button";
import '../../../PetSearchPage.css';

function PetSearchPage() {
 const [selectedRegion, setSelectedRegion] = useState(null);

  // 지역별로 휴게소 필터링하는 함수
  const filteredFacilities = facilities.filter(facility => facility.region === selectedRegion);

 const RegionClickhandler = (region) => {
  setSelectedRegion(region);
 };

    return (
      <div className="pet-search-page-container">
        <p/>
        <h3 className="header-title">지역별 반려동물 휴게소 편의시설</h3>
        <p/>
        <div className="button-group">
          <p/>
        <Button title="경기" onClick={() => RegionClickhandler('경기')}/>
          　　
        <Button title="충북" onClick={() => RegionClickhandler('충북')}/>
          　　
        <Button title="충남" onClick={() => RegionClickhandler('충남')}/>
          　　
        <Button title="전북" onClick={() => RegionClickhandler('전북')}/>
          　　
        <Button title="경남" onClick={() => RegionClickhandler('경남')}/>
          　　
        <Button title="경북" onClick={() => RegionClickhandler('경북')}/>
      </div>

      {selectedRegion && (
        <div>
          <p/>
          <h3 className="region-title">{selectedRegion} 지역 휴게소 목록</h3>
        <FacilityList facilities={filteredFacilities} />
        </div>
      )}
      </div>

    );
}

export default PetSearchPage;