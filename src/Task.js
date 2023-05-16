import React from "react";
import { formatDistanceToNow, differenceInDays } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const deadlineColor =
    differenceInDays(new Date(taskObj.deadline), new Date()) <= 3
      ? "bg-[#ffd9d4]"
      : "bg-[#d2d5fd]";
  return (
    <div className="p-6 bg-white leading-normal mt-4 shadow-md rounded-md">
      <h3 className="text-lg text-[#c8781a]">{taskObj.title}</h3>
      <div className="text-xs pt-1">
        son teslim:{" "}
        <span className={`${deadlineColor} py-1 px-2 rounded-sm inline-block`}>
          {formatDistanceToNow(new Date(taskObj.deadline), {
            addSuffix: true,
            locale: tr,
          })}
        </span>
      </div>
      <p className="pt-2 pb-3 text-sm text-[#444]">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className=" inline-block py-1 px-3 text-sm border border-solid border-[#ccc] mr-1 mb-1.5 rounded-3xl "
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className=" block py-2 px-3 ml-auto bg-[#fecc91] shadow-[0_4px_5px_0_rgb(0,0,0,0.5)] rounded border-0 cursor-pointer"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
