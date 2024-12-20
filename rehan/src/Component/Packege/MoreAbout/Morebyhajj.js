
import React from "react";
import Trip from "../../tripform/UmrahHajjform";

const Morebyhajj = () => {
  const list = [
    {
      heading: "Laundry",
      items: [
        "Laundry service will be provided 2 times in Makka and 2 times in Madina.",
        "We will not be responsible for Damage and Lost clothes.",
        "Please do not give your very Expensive and New Clothes for Laundry.",
        "Please inform your guest not to give their Undergarments, Curtains, Bedsheets, and Pillow covers of the hotel In laundry.",
        "No Laundry will be provided 3 Days Before Eid and 3 Days After Eid.",
      ],
    },
    {
      heading: "Ziyarats",
      items: [
        "Makka Ziyarats and Madina Ziyarats will be provided in Sharing Bus.",
        "Timings for Ziarats will be informed to guests 24 hrs prior, and if Guests are not present on mentioned timings, Guests will have to manage their own Ziyarats.",
      ],
    },
    {
      heading: "Zamzam",
      items: [
        "ZAMZAM Cans are provided as a Complimentary Return Gift to the Guest on their Return from Saudi Airport.",
        "Providing Zamzam Stock on the airport is the responsibility of Saudi government and we cannot be held responsible if there is a shortage.",
        "All Guests are supposed to arrange their own Zamzam stock if they want to be double sure.",
      ],
    },
    {
      heading: "Other Travel Conditions",
      items: [
        "Any increase in Air Ticket or Saudi Riyal will have to be paid before departure.",
        "Private Transfers, Personal Expenses & Room Service are not included in the Package.",
        "Satisfaction of the pilgrim is our prime consideration. Any claim or complaint must be intimated immediately.",
        "Room Allotment is as per our arrangement. No room choices will be entertained.",
        "Personal food demands will not be entertained. Special food for infants, the elderly, or medical patients must be arranged by the guest.",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Trip />
        <h1 className="text-3xl font-bold text-left pl-6 md:pl-0 mb-6">
          Terms & Conditions
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Conditions Section */}
          <div className="md:w-3/4">
            {list.map((term, index) => (
              <div key={index} className="mb-8 bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  {term.heading}
                </h2>
                <ol className="list-decimal ml-4 text-gray-600 space-y-2">
                  {term.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          {/* Contact Form */}

          <div className="contact shadow-xl h-[84vh] w-full lg:w-[25%] px-6 sticky top-[20%]">
            <h1 className="text-xl font-semibold mb-4">Contact</h1>
            <div className="contact-section border-2 border-orange-400 p-4 rounded-lg">
              <p className="mb-4 text-gray-700">Your key to hassle-free adventures.</p>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-red-400 focus:border-red-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number:
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter your phone number"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-red-400 focus:border-red-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-red-400 focus:border-red-400"
                  />
                </div>
                <button
                  type="submit"
                  id="button"
                  className="w-full py-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>


        </div>
      </div>
    </div >
  );
};

export default Morebyhajj;

