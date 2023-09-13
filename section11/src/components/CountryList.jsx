import CountryItem from "./CountryItem";
import style from "./CountryList.module.css";

export default function CountryList({ countries }) {
    return(
        <div className={style.container}>
            {countries.map((country) => <CountryItem key={country.code} {...country}/>)}
        </div>
    )
}

CountryList.defaultProps = {
    countries: [] // 만약 countries가 제대로 전달되지 않은 경우, map을 돌렸을 때 오류가 나지 않도록 기본적으로 설정해두기
}