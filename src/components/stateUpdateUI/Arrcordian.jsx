import { ChevronDown } from "lucide-react";
import { useState } from "react";
import arrcordians from "../../data/arrcordian";

function Panel({ title, children, onClick, isOpen }) {
  return (
    <>
      <div className={` ${isOpen? 'border-gray-400' : ''} border border-gray-200 p-4 rounded-lg w-150 hover:border-gray-400 cursor-pointer`}>
        <div className="flex justify-between py-1" onClick={onClick}>
          <h2 className="font-medium">{title}</h2>
          <ChevronDown strokeWidth={1.5} className={`${isOpen? 'rotate-90' : ''} text-blue-600 transition-all duration-100`} />
        </div>
        <p className={`text-gray-400 ${isOpen? '' : 'hidden'}`}>{children}</p>
      </div>
    </>
  );
}

function Arrcordian() {
  const [isOpen,setIsOpen] = useState(null)
  const handleTogglePanel = (index) => {
    setIsOpen(isOpen == index ? null:index);
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen text-sm">
        <h1 className="text-5xl font-bold tracking-tight text-gray-800">
          Question & Anwser
        </h1>
        <div className="flex flex-col gap-2 mt-10">
          {arrcordians?.length > 0 ? (
            arrcordians.map((item, index) => (
              <Panel key={index} title={item.title} onClick={() => handleTogglePanel(index)} isOpen={isOpen==index}>
                {item.content}
              </Panel>
            ))
          ) : (
            <div className="text-gray-400">Chưa có dữ liệu</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Arrcordian;
