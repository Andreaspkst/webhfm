import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Reg = () => {
  const [countryState, setCountryState] = useState({
    countries: [],
    errorMessage: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        //  fetch data
        const dataUrl = `https://restcountries.com/v3.1/all`;
        const response = await axios.get(dataUrl);
        setCountryState({
          ...countryState,
          countries: response.data
        });
      } catch (error) {
        setCountryState({
          ...countryState
        });
      }
    };

    fetchData();
  }, []);
  const { countries } = countryState;
  const [selectedCountry, setSelectedCountry] = useState();

  //find selected country data
  //search selected country
  const searchSelectedCountry = countries.find((obj) => {
    if (obj.name.common === selectedCountry) {
      return true;
    }
  });
  console.log("searchSelectedCountry", searchSelectedCountry);

  

  return (
    <div className="w-full flex flex-col justify-between">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          <div className="">
            <div className="md:flex md:flex-cols-3 w-auto grid grid-cols-1 py-5 my-10">
                <input type="text" placeholder="First Name" className="border-2 border-gray-950 md:w-[26%] w-[100%] h-8 md:mx-5 my-5 p-2"/>
                <input type="text" placeholder="Last Name" className="border-2 border-gray-950 md:w-[26%] w-[100%] h-8 md:mx-5 my-5 p-2"/>
                <input type="Email" placeholder="Email" className="border-2 border-gray-950 md:w-[26%] w-[100%] h-8 md:mx-5 my-5 p-2"/>
            </div>
            <div className="grid md:grid-cols-3 max-w-[1240px] m-auto">
                <div className="">
                    <select
                            value={selectedCountry}
                            onChange={(e) => setSelectedCountry(e.target.value)}
                            className="border-2 border-gray-950 md:w-[70%] w-[100%] h-8 md:mx-5 "
                            >
                        <option className=""> Country of Residence </option>
                        {countries.map((item) => {
                            return (
                                <option key={uuidv4()} value={item.name.common}>
                                {item.name.common}
                            </option>
                            );
                        })}
                    </select>
                </div>
                <div className="w-full flex max-w-[1240px] m-auto md:py-0 py-5">
                    <div className="h-8 p-1 md:w-[30%] w-[25%] border-2 border-gray-950">
                        {searchSelectedCountry && searchSelectedCountry.idd.root}
                        {searchSelectedCountry && searchSelectedCountry.idd.suffixes}
                    </div>
                    <input type="tel" placeholder="Phone" className="border-2 border-gray-950  md:w-[70%] w-[100%] h-8 ml-2 p-2"/>
                </div>
                <div className="">
                <select
                    id="dropdown"
                    name="dropdown"
                    className="border-2 border-gray-950 md:w-[70%] w-[100%] h-8 md:mx-5"
                >
                    <option value="">Currency</option>
                    <option value="option1">USD</option>
                    <option value="option2">EUR</option>
                    <option value="option3">GPB</option>
                </select>

                </div>
            </div>
            <div className="col-span-2">

            </div>     
            
          </div>
          <div className="md:p-8 w-full h-auto flex flex-col justify-between">
            <div className="flex gap-2 my-10">
                <input type="checkbox"  placeholder="Phone" className="w-7"/>
                <p className="justify-center"> I have read and accepted the privacy policy Trading Forex & CFDs is risky</p>
            </div>
            <div className="flex gap-2 my-5">
                <button className="bg-[#FF5733] text-white uppercase w-full h-10 my-2">get started</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Reg