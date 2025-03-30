import { House, Pencil, Trash, ChevronRight, ChevronDown, Plus } from "lucide-react";

export const Task = () => {
  return (
    <div className="p-2 bg-neutral-900 md:pt-4 md:px-4">
      <div className="flex items-center gap-3 pb-2 mb-4 sticky top-10 bg-neutral-900 md:bg-transparent md:pt-2 md:top-0 md:backdrop-blur-md z-20">
        <House className="text-primary w-6" />
        <h2 className="font bold text-primary font-semibold text-2xl">Tasks</h2>
      </div>
      <ul className="list bg-neutral-800 rounded-box shadow-md">
        {/* <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            Pending Tasks
          </li> */}

        <li className="list-row items-center">
          <div>
            <input
              type="checkbox"
              className="checkbox checkbox-sm checkbox-primary"
            />
          </div>
          <div>
            <div>Dio Lupa</div>
            <div className="text-xs opacity-60">
              Lorem ipsum dolor sit, amet consectetur
            </div>
          </div>
          <button className="btn btn-square btn-primary btn-ghost">
            <Pencil className="w-4" />
          </button>
          <button className="btn btn-square btn-primary btn-ghost">
            <Trash className="w-4" />
          </button>
        </li>

        <li className="list-row items-center">
          <div>
            <input
              type="checkbox"
              className="checkbox checkbox-sm checkbox-primary"
            />
          </div>
          <div>
            <div>Dio Lupa</div>
            <div className="text-xs opacity-60">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eius
              doloremque vitae blanditiis
            </div>
          </div>
          <button className="btn btn-square btn-primary btn-ghost">
            <Pencil className="w-4" />
          </button>
          <button className="btn btn-square btn-primary btn-ghost">
            <Trash className="w-4" />
          </button>
        </li>

        <li className="list-row items-center">
          <div>
            <input
              type="checkbox"
              className="checkbox checkbox-sm checkbox-primary"
            />
          </div>
          <div>
            <div>Dio Lupa</div>
            <div className="text-xs opacity-60">Lorem ipsum dolor sit</div>
          </div>
          <button className="btn btn-square btn-primary btn-ghost">
            <Pencil className="w-4" />
          </button>
          <button className="btn btn-square btn-primary btn-ghost">
            <Trash className="w-4" />
          </button>
        </li>

        <li className="list-row items-center">
          <div>
            <input
              type="checkbox"
              className="checkbox checkbox-sm checkbox-primary"
            />
          </div>
          <div>
            <div>Dio Lupa</div>
            <div className="text-xs opacity-60">
              Lorem ipsum dolor sit, amet consectetur
            </div>
          </div>
          <button className="btn btn-square btn-primary btn-ghost">
            <Pencil className="w-4" />
          </button>
          <button className="btn btn-square btn-primary btn-ghost">
            <Trash className="w-4" />
          </button>
        </li>

        <li className="list-row items-center">
          <div>
            <input
              type="checkbox"
              className="checkbox checkbox-sm checkbox-primary"
            />
          </div>
          <div>
            <div>Dio Lupa</div>
            <div className="text-xs opacity-60">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eius
              doloremque vitae blanditiis
            </div>
          </div>
          <button className="btn btn-square btn-primary btn-ghost">
            <Pencil className="w-4" />
          </button>
          <button className="btn btn-square btn-primary btn-ghost">
            <Trash className="w-4" />
          </button>
        </li>

        <li className="list-row items-center">
          <div>
            <input
              type="checkbox"
              className="checkbox checkbox-sm checkbox-primary"
            />
          </div>
          <div>
            <div>Dio Lupa</div>
            <div className="text-xs opacity-60">Lorem ipsum dolor sit,</div>
          </div>
          <button className="btn btn-square btn-primary btn-ghost">
            <Pencil className="w-4" />
          </button>
          <button className="btn btn-square btn-primary btn-ghost">
            <Trash className="w-4" />
          </button>
        </li>

        <li className="list-row items-center">
          <div>
            <input
              type="checkbox"
              className="checkbox checkbox-sm checkbox-primary"
            />
          </div>
          <div>
            <div>Dio Lupa</div>
            <div className="text-xs opacity-60">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eius
              doloremque vitae blanditiis quidem aperiam quae natus libero
              maxime nihil consequuntur temporibus, delectus vel eaque
              aspernatur ad ab minus ut.
            </div>
          </div>
          <button className="btn btn-square btn-primary btn-ghost">
            <Pencil className="w-4" />
          </button>
          <button className="btn btn-square btn-primary btn-ghost">
            <Trash className="w-4" />
          </button>
        </li>

        <li className="list-row items-center">
          <div>
            <input
              type="checkbox"
              className="checkbox checkbox-sm checkbox-primary"
            />
          </div>
          <div>
            <div>Dio Lupa</div>
            <div className="text-xs opacity-60">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eius
              doloremque vitae blanditiis
            </div>
          </div>
          <button className="btn btn-square btn-primary btn-ghost">
            <Pencil className="w-4" />
          </button>
          <button className="btn btn-square btn-primary btn-ghost">
            <Trash className="w-4" />
          </button>
        </li>

        <li className="list-row items-center">
          <div>
            <input
              type="checkbox"
              className="checkbox checkbox-sm checkbox-primary"
            />
          </div>
          <div>
            <div>Dio Lupa</div>
            <div className="text-xs opacity-60">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eius
              doloremque vitae blanditiis quidem aperiam quae natus libero
              maxime nihil consequuntur temporibus, delectus vel eaque
              aspernatur ad ab minus ut.
            </div>
          </div>
          <button className="btn btn-square btn-primary btn-ghost">
            <Pencil className="w-4" />
          </button>
          <button className="btn btn-square btn-primary btn-ghost">
            <Trash className="w-4" />
          </button>
        </li>
      </ul>

      <div className="my-2">
        <button className="btn bg-neutral-800 shadow-none">
          <ChevronRight className="w-4" />
          Completed
          <span>5</span>
        </button>
      </div>
      
      {/* completed */}
      <ul className="list bg-neutral-800 rounded-box shadow-md">
        {/* <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            Pending Tasks
          </li> */}

        <li className="list-row items-center">
          <div>
            <input
              type="checkbox"
              className="checkbox checkbox-sm checkbox-primary"
            />
          </div>
          <div>
            <div>Dio Lupa</div>
            <div className="text-xs opacity-60">
              Lorem ipsum dolor sit, amet consectetur
            </div>
          </div>
          <button className="btn btn-square btn-primary btn-ghost">
            <Trash className="w-4" />
          </button>
        </li>

        <li className="list-row items-center">
          <div>
            <input
              type="checkbox"
              className="checkbox checkbox-sm checkbox-primary"
            />
          </div>
          <div>
            <div>Dio Lupa</div>
            <div className="text-xs opacity-60">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eius
              doloremque vitae blanditiis
            </div>
          </div>
          <button className="btn btn-square btn-primary btn-ghost">
            <Trash className="w-4" />
          </button>
        </li>

        <li className="list-row items-center">
          <div>
            <input
              type="checkbox"
              className="checkbox checkbox-sm checkbox-primary"
            />
          </div>
          <div>
            <div>Dio Lupa</div>
            <div className="text-xs opacity-60">Lorem ipsum dolor sit</div>
          </div>
          <button className="btn btn-square btn-primary btn-ghost">
            <Trash className="w-4" />
          </button>
        </li>

        <li className="list-row items-center">
          <div>
            <input
              type="checkbox"
              className="checkbox checkbox-sm checkbox-primary"
            />
          </div>
          <div>
            <div>Dio Lupa</div>
            <div className="text-xs opacity-60">
              Lorem ipsum dolor sit, amet consectetur
            </div>
          </div>
          <button className="btn btn-square btn-primary btn-ghost">
            <Trash className="w-4" />
          </button>
        </li>

        <li className="list-row items-center">
          <div>
            <input
              type="checkbox"
              className="checkbox checkbox-sm checkbox-primary"
            />
          </div>
          <div>
            <div>Dio Lupa</div>
            <div className="text-xs opacity-60">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eius
              doloremque vitae blanditiis
            </div>
          </div>

          <button className="btn btn-square btn-primary btn-ghost">
            <Trash className="w-4" />
          </button>
        </li>

      </ul>


      {/* modal */}
      <label htmlFor="task-modal" className="btn btn-primary p-0 mb-4 rounded-full size-10 md:size-12 fixed right-5 bottom-0 z-50"><Plus /></label>
      <input type="checkbox" id="task-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-neutral-800">
          <h2 className="font-bold text-lg">New Task</h2>
          <input type="text" name="title" placeholder="Title" className="input input-bordered w-full mt-2 focus:outline-none focus:scale-100 bg-neutral-800" required />
          <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full mt-2 focus:outline-none focus:scale-100 bg-neutral-800"></textarea>
          <input type="datetime-local" name="dueDate" className="input input-bordered focus:outline-none focus:scale-100 w-full mt-2 bg-neutral-800" />

          <select name="category" className="select select-bordered w-full mt-2 focus:outline-none focus:scale-100 bg-neutral-800">
            <option value="Work">💼 Work</option>
            <option value="Personal">🏠 Personal</option>
            <option value="Urgent">🚨 Urgent</option>
          </select>

          <div className="modal-action">
            <label htmlFor="task-modal" className="btn btn-primary shadow-none outline-none">Add</label>
            <label htmlFor="task-modal" className="btn btn-primary shadow-none outline-none">Cancel</label>
          </div>
        </div>
      </div>
    </div>
  );
};
