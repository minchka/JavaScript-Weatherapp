
const apiKey = "8d125f1a4c9d419a13b06a5cece3cba0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiUrlLatLong = "https://api.openweathermap.org/data/2.5/weather?";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");




async function checkWeather(city) {
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var isoCountries = {
        AF : 'Afghanistan',
        AX : 'Aland Islands',
        AL : 'Albania',
        DZ : 'Algeria',
        AS : 'American Samoa',
        AD : 'Andorra',
        AO : 'Angola',
        AI : 'Anguilla',
        AQ : 'Antarctica',
        AG : 'Antigua And Barbuda',
        AR : 'Argentina',
        AM : 'Armenia',
        AW : 'Aruba',
        AU : 'Australia',
        AT : 'Austria',
        AZ : 'Azerbaijan',
        BS : 'Bahamas',
        BH : 'Bahrain',
        BD : 'Bangladesh',
        BB : 'Barbados',
        BY : 'Belarus',
        BE : 'Belgium',
        BZ : 'Belize',
        BJ : 'Benin',
        BM : 'Bermuda',
        BT : 'Bhutan',
        BO : 'Bolivia',
        BA : 'Bosnia And Herzegovina',
        BW : 'Botswana',
        BV : 'Bouvet Island',
        BR : 'Brazil',
        IO : 'British Indian Ocean Territory',
        BN : 'Brunei Darussalam',
        BG : 'Bulgaria',
        BF : 'Burkina Faso',
        BI : 'Burundi',
        KH : 'Cambodia',
        CM : 'Cameroon',
        CA : 'Canada',
        CV : 'Cape Verde',
        KY : 'Cayman Islands',
        CF : 'Central African Republic',
        TD : 'Chad',
        CL : 'Chile',
        CN : 'China',
        CX : 'Christmas Island',
        CC : 'Cocos (Keeling) Islands',
        CO : 'Colombia',
        KM : 'Comoros',
        CG : 'Congo',
        CD : 'Congo, Democratic Republic',
        CK : 'Cook Islands',
        CR : 'Costa Rica',
        CI : 'Cote D\'Ivoire',
        HR : 'Croatia',
        CU : 'Cuba',
        CY : 'Cyprus',
        CZ : 'Czech Republic',
        DK : 'Denmark',
        DJ : 'Djibouti',
        DM : 'Dominica',
        DO : 'Dominican Republic',
        EC : 'Ecuador',
        EG : 'Egypt',
        SV : 'El Salvador',
        GQ : 'Equatorial Guinea',
        ER : 'Eritrea',
        EE : 'Estonia',
        ET : 'Ethiopia',
        FK : 'Falkland Islands (Malvinas)',
        FO : 'Faroe Islands',
        FJ : 'Fiji',
        FI : 'Finland',
        FR : 'France',
        GF : 'French Guiana',
        PF : 'French Polynesia',
        TF : 'French Southern Territories',
        GA : 'Gabon',
        GM : 'Gambia',
        GE : 'Georgia',
        DE : 'Germany',
        GH : 'Ghana',
        GI : 'Gibraltar',
        GR : 'Greece',
        GL : 'Greenland',
        GD : 'Grenada',
        GP : 'Guadeloupe',
        GU : 'Guam',
        GT : 'Guatemala',
        GG : 'Guernsey',
        GN : 'Guinea',
        GW : 'Guinea-Bissau',
        GY : 'Guyana',
        HT : 'Haiti',
        HM : 'Heard Island & Mcdonald Islands',
        VA : 'Holy See (Vatican City State)',
        HN : 'Honduras',
        HK : 'Hong Kong',
        HU : 'Hungary',
        IS : 'Iceland',
        IN : 'India',
        ID : 'Indonesia',
        IR : 'Iran, Islamic Republic Of',
        IQ : 'Iraq',
        IE : 'Ireland',
        IM : 'Isle Of Man',
        IL : 'Israel',
        IT : 'Italy',
        JM : 'Jamaica',
        JP : 'Japan',
        JE : 'Jersey',
        JO : 'Jordan',
        KZ : 'Kazakhstan',
        KE : 'Kenya',
        KI : 'Kiribati',
        KR : 'Korea',
        KW : 'Kuwait',
        KG : 'Kyrgyzstan',
        LA : 'Lao People\'s Democratic Republic',
        LV : 'Latvia',
        LB : 'Lebanon',
        LS : 'Lesotho',
        LR : 'Liberia',
        LY : 'Libyan Arab Jamahiriya',
        LI : 'Liechtenstein',
        LT : 'Lithuania',
        LU : 'Luxembourg',
        MO : 'Macao',
        MK : 'Macedonia',
        MG : 'Madagascar',
        MW : 'Malawi',
        MY : 'Malaysia',
        MV : 'Maldives',
        ML : 'Mali',
        MT : 'Malta',
        MH : 'Marshall Islands',
        MQ : 'Martinique',
        MR : 'Mauritania',
        MU : 'Mauritius',
        YT : 'Mayotte',
        MX : 'Mexico',
        FM : 'Micronesia, Federated States Of',
        MD : 'Moldova',
        MC : 'Monaco',
        MN : 'Mongolia',
        ME : 'Montenegro',
        MS : 'Montserrat',
        MA : 'Morocco',
        MZ : 'Mozambique',
        MM : 'Myanmar',
        NA : 'Namibia',
        NR : 'Nauru',
        NP : 'Nepal',
        NL : 'Netherlands',
        AN : 'Netherlands Antilles',
        NC : 'New Caledonia',
        NZ : 'New Zealand',
        NI : 'Nicaragua',
        NE : 'Niger',
        NG : 'Nigeria',
        NU : 'Niue',
        NF : 'Norfolk Island',
        MP : 'Northern Mariana Islands',
        NO : 'Norway',
        OM : 'Oman',
        PK : 'Pakistan',
        PW : 'Palau',
        PS : 'Palestinian Territory, Occupied',
        PA : 'Panama',
        PG : 'Papua New Guinea',
        PY : 'Paraguay',
        PE : 'Peru',
        PH : 'Philippines',
        PN : 'Pitcairn',
        PL : 'Poland',
        PT : 'Portugal',
        PR : 'Puerto Rico',
        QA : 'Qatar',
        RE : 'Reunion',
        RO : 'Romania',
        RU : 'Russian Federation',
        RW : 'Rwanda',
        BL : 'Saint Barthelemy',
        SH : 'Saint Helena',
        KN : 'Saint Kitts And Nevis',
        LC : 'Saint Lucia',
        MF : 'Saint Martin',
        PM : 'Saint Pierre And Miquelon',
        VC : 'Saint Vincent And Grenadines',
        WS : 'Samoa',
        SM : 'San Marino',
        ST : 'Sao Tome And Principe',
        SA : 'Saudi Arabia',
        SN : 'Senegal',
        RS : 'Serbia',
        SC : 'Seychelles',
        SL : 'Sierra Leone',
        SG : 'Singapore',
        SK : 'Slovakia',
        SI : 'Slovenia',
        SB : 'Solomon Islands',
        SO : 'Somalia',
        ZA : 'South Africa',
        GS : 'South Georgia And Sandwich Isl.',
        ES : 'Spain',
        LK : 'Sri Lanka',
        SD : 'Sudan',
        SR : 'Suriname',
        SJ : 'Svalbard And Jan Mayen',
        SZ : 'Swaziland',
        SE : 'Sweden',
        CH : 'Switzerland',
        SY : 'Syrian Arab Republic',
        TW : 'Taiwan',
        TJ : 'Tajikistan',
        TZ : 'Tanzania',
        TH : 'Thailand',
        TL : 'Timor-Leste',
        TG : 'Togo',
        TK : 'Tokelau',
        TO : 'Tonga',
        TT : 'Trinidad And Tobago',
        TN : 'Tunisia',
        TR : 'Turkey',
        TM : 'Turkmenistan',
        TC : 'Turks And Caicos Islands',
        TV : 'Tuvalu',
        UG : 'Uganda',
        UA : 'Ukraine',
        AE : 'United Arab Emirates',
        GB : 'United Kingdom',
        US : 'United States',
        UM : 'United States Outlying Islands',
        UY : 'Uruguay',
        UZ : 'Uzbekistan',
        VU : 'Vanuatu',
        VE : 'Venezuela',
        VN : 'Viet Nam',
        VG : 'Virgin Islands, British',
        VI : 'Virgin Islands, U.S.',
        WF : 'Wallis And Futuna',
        EH : 'Western Sahara',
        YE : 'Yemen',
        ZM : 'Zambia',
        ZW : 'Zimbabwe'
    };
    
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else if(response.status == 400){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        
    }
    
    
    
    
    data = await response.json();

    
    let country = data.sys.country;
    let displayCountry = (isoCountries[country]);
    
    //console.log(data)
    //console.log(country)
    //console.log(isoCountries.NG)
    //console.log(displayCountry.country)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " m/s";
    document.querySelector(".country").innerHTML = displayCountry;

 if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/clouds.png";

 } else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png";

 } else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png";

 } else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/drizzle.png";

 }  else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "images/fog.png";

 } else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "images/snow.png";

 } else if(data.weather[0].main == "Thunderstorm"){
    weatherIcon.src = "images/thunderstorm.png";

 } else if(data.weather[0].main == "Fog", "Haze"){
    weatherIcon.src = "images/fog.png";

 } else if(data.weather[0].main == "Tornado"){
    weatherIcon.src = "images/tornado.svg";
    
 } else if(data.weather[0].main == "Smoke"){
    weatherIcon.src = "images/smoke.png"

 } else if(data.weather[0].main == "Dust", "Sand", "Ash", "Squall"){
    weatherIcon.src = "images/smoke.png"
 }
 
 //Prevod stanja vremena na bosanski

if (data.weather[0].main == "Clear"){
    document.querySelector(".weather-text").innerHTML = "Vedro";

} else if(data.weather[0].main == "Clouds"){
    document.querySelector(".weather-text").innerHTML = "Oblačno";

} else if (data.weather[0].main == "Rain"){
    document.querySelector(".weather-text").innerHTML = "Kiša";

} else if (data.weather[0].main == "Drizzle"){
    document.querySelector(".weather-text").innerHTML = "Sitna Kiša";

} else if (data.weather[0].main == "Mist", "Fog", "Haze"){
    document.querySelector(".weather-text").innerHTML = "Magla";

} else if (data.weather[0].main == "Snow"){
    document.querySelector(".weather-text").innerHTML = "Snijeg";

} else if (data.weather[0].main == "Thunderstorm"){
    document.querySelector(".weather-text").innerHTML = "Grmljavina";

} else if (data.weather[0].main == "Smoke"){
    document.querySelector(".weather-text").innerHTML = "Smog";

} else if (data.weather[0].main == "Dust", "Sand", "Ash", "Squall"){
    document.querySelector(".weather-text").innerHTML = "Nevrijeme";

} 





 document.querySelector(".weather").style.display = "block";
 document.querySelector(".error").style.display = "none";






}



searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});





// Get the input field
let input = document.getElementById("inputfield");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("searchbutton").click();
  }
});

//////////////////////////////////////////////////////////////////////////
/*

async function checkWeather(pos) {
    

   if(responseLonLat.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else if(responseLonLat.status == 400){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        
    }
        
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  /////////////////////////////

  
}


    let data = await responseLonLat.json();
    let country = data.sys.country

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " m/s";
    document.querySelector(".country").innerHTML = country;

 if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/clouds.png";

 } else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png";

 } else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png";

 } else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/drizzle.png";

 }  else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "images/fog.png";

 } else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "images/snow.png";

 } else if(data.weather[0].main == "Thunderstorm"){
    weatherIcon.src = "images/thunderstorm.png";

 } else if(data.weather[0].main == "Fog", "Haze"){
    weatherIcon.src = "images/fog.png";

 } else if(data.weather[0].main == "Tornado"){
    weatherIcon.src = "images/tornado.svg";
    
 } else if(data.weather[0].main == "Smoke"){
    weatherIcon.src = "images/smoke.png"

 } else if(data.weather[0].main == "Dust", "Sand", "Ash", "Squall"){
    weatherIcon.src = "images/smoke.png"
 }
 
 //Prevod stanja vremena na bosanski

if (data.weather[0].main == "Clear"){
    document.querySelector(".weather-text").innerHTML = "Vedro";

} else if(data.weather[0].main == "Clouds"){
    document.querySelector(".weather-text").innerHTML = "Oblačno";

} else if (data.weather[0].main == "Rain"){
    document.querySelector(".weather-text").innerHTML = "Kiša";

} else if (data.weather[0].main == "Drizzle"){
    document.querySelector(".weather-text").innerHTML = "Sitna Kiša";

} else if (data.weather[0].main == "Mist", "Fog", "Haze"){
    document.querySelector(".weather-text").innerHTML = "Magla";

} else if (data.weather[0].main == "Snow"){
    document.querySelector(".weather-text").innerHTML = "Snijeg";

} else if (data.weather[0].main == "Thunderstorm"){
    document.querySelector(".weather-text").innerHTML = "Grmljavina";

} else if (data.weather[0].main == "Smoke"){
    document.querySelector(".weather-text").innerHTML = "Smog";

} else if (data.weather[0].main == "Dust", "Sand", "Ash", "Squall"){
    document.querySelector(".weather-text").innerHTML = "Nevrijeme";

} 
}





function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);



*/
