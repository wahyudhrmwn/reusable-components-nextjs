import React, { useState } from "react";
import {
  Accordion,
  Button,
  Countdown,
  FileTree,
  Menu,
  Modal,
  Table,
} from "../index";
import Dropdown from "@/components/Dropdown/Dropdown";
import { AiOutlineBars, AiOutlineBell, AiOutlineHome } from "react-icons/ai";

const App: React.FC = () => {
  // Handling Dropdowwn
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleChange = (value: string) => {
    setSelectedOption(value);
    console.log("Selected option:", value);
  };

  // Handle Modal
  const openModal = () => {
    const modal = document.getElementById("example_modal") as HTMLDialogElement;
    modal?.showModal();
  };

  // Data Accordion
  const items = [
    {
      title: "Click to open this one and close others",
      content: "Hello, this is the content for the first item.",
    },
    {
      title: "Another item to open",
      content: "Here is the content for the second item.",
    },
    {
      title: "A third item to toggle",
      content: "Content for the third item goes here.",
    },
  ];

  // Countdown
  // Tentukan tanggal target untuk countdown
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 1); // Tambahkan 2 hari dari sekarang

  //TABLE DUMMY DATA
  const columns = [
    { key: "id", header: "#" },
    { key: "name", header: "Name" },
    { key: "job", header: "Job" },
    { key: "company", header: "Company" },
    { key: "location", header: "Location" },
    { key: "lastLogin", header: "Last Login" },
    { key: "favoriteColor", header: "Favorite Color" },
  ];

  const data = [
    {
      id: 1,
      name: "Cy Ganderton",
      job: "Quality Control Specialist",
      company: "Littel, Schaden and Vandervort",
      location: "Canada",
      lastLogin: "12/16/2020",
      favoriteColor: "Blue",
    },
    {
      id: 2,
      name: "Hart Hagerty",
      job: "Desktop Support Technician",
      company: "Zemlak, Daniel and Leannon",
      location: "United States",
      lastLogin: "12/5/2020",
      favoriteColor: "Purple",
    },
    // Tambahkan data lainnya...
  ];

  // DATA MENU
  const menuItems = [
    {
      label: "Inbox",
      href: "/inbox",
      icon: <AiOutlineHome className="h-5 w-5" />,
      badge: "99+",
      badgeType: "success",
    },
    {
      label: "Updates",
      href: "/updates",
      icon: <AiOutlineBell className="h-5 w-5" />,
      badge: "NEW",
      badgeType: "warning",
    },
    {
      label: "Stats",
      href: "/stats",
      icon: <AiOutlineBars className="h-5 w-5" />,
      badge: "",
    },
  ];

  //DATA FILE TREE
  const fileTreeData = [
    {
      name: "project",
      type: "folder",
      children: [
        {
          name: "pages",
          type: "folder",
          children: [
            { name: "_app.tsx", type: "file" },
            { name: "index.tsx", type: "file" },
          ],
        },
        {
          name: "src",
          type: "folder",
          children: [
            { name: "components", type: "folder" },
            { name: "utils", type: "folder" },
            {
              name: "styles",
              type: "folder",
              children: [{ name: "globals.css", type: "file" }],
            },
          ],
        },
        { name: "tailwind.config.js", type: "file" },
        { name: "tsconfig.json", type: "file" },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center bg-blue-100 justify-center gap-8 pt-10">
      {/* COMPONENT BUTTON */}
      <div className="components--button flex justify-center gap-x-4 w-full ">
        <div>
          <Button
            variant="primary"
            onClick={() => alert("Primary Button Clicked!")}
          >
            Primary Button
          </Button>
        </div>
        <div>
          <Button
            variant="secondary"
            onClick={() => alert("Secondary Button Clicked!")}
          >
            Secondary Button
          </Button>
        </div>
      </div>
      {/* COMPONENT BUTTON */}
      <div className="border-solid border-t-4 border-blue-950 w-full"></div>

      {/* COMPONENT DROPDOWN */}
      <div className="components--dropdown">
        <Dropdown
          label="Select an Option"
          placeholder="Please choose an option"
          items={["Option 1", "Option 2", "Option 3"]}
          value={selectedOption} // Mirip :modelValue
          onChange={handleChange} // Mirip @update:modelValue
          validationMessage={!selectedOption ? "This field is required." : ""}
        />
      </div>
      {/* COMPONENT BUTTON */}
      <div className="border-solid border-t-4 border-blue-950 w-full"></div>

      {/* COMPONENT MODAL */}
      <div className="components--modal w-full h-20">
        <div className="w-full h-full content-center text-center">
          <button
            className="btn rounded-lg p-4 bg-blue-400"
            onClick={openModal}
          >
            Open Modal
          </button>
          <Modal
            id="example_modal"
            title="Hello!"
            content="Press ESC key or click the button below to close"
          />
        </div>
      </div>
      {/* COMPONENT BUTTON */}
      <div className="border-solid border-t-4 border-blue-950 w-full"></div>

      {/* COMPONENT ACCORDION */}
      <div className="components--accordion w-full justify-items-center">
        <div className="max-w-3xl w-full my-4">
          <Accordion items={items} />
        </div>
      </div>
      {/* COMPONENT ACCORDION */}
      <div className="border-solid border-t-4 border-blue-950 w-full"></div>

      {/* COMPONENT COUNTDOWN */}
      <div className="components--countdown w-full justify-items-center">
        <div className="p-5 bg-white rounded-lg shadow">
          <h1 className="text-xl font-bold mb-4">Countdown Timer</h1>
          <Countdown targetDate={targetDate} />
        </div>
      </div>
      {/* COMPONENT COUNTDOWN */}
      <div className="border-solid border-t-4 border-blue-950 w-full"></div>

      {/* COMPONENT TABLE */}
      <div className="components--table w-full justify-items-center">
        <div className="p-4">
          <Table columns={columns} data={data} />
        </div>
      </div>
      {/* COMPONENT TABLE */}
      <div className="border-solid border-t-4 border-blue-950 w-full"></div>

      {/* COMPONENT MENU */}
      <div className="components--menu w-full justify-items-center">
        <div className="p-4">
          <Menu items={menuItems} orientation="horizontal" />
        </div>
      </div>
      {/* COMPONENT MENU */}
      <div className="border-solid border-t-4 border-blue-950 w-full"></div>

      {/* COMPONENT FILE TREE */}
      <div className="components--file-tree w-full justify-items-center">
        <div className="p-4 bg-white min-w-96 rounded-lg">
          <FileTree items={fileTreeData} />
        </div>
      </div>
      {/* COMPONENT FILE TREE */}
      <div className="border-solid border-t-4 border-blue-950 w-full"></div>
    </div>
  );
};

export default App;
