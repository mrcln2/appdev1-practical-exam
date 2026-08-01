import { TASK_CATEGORY, TASK_STATUS } from './taskConstants';

function TaskItem({ task, description }) {
  return (
    <>
      <article>
        <h3>{task}</h3>
        <p>{description}</p>
        <small>Category: {TASK_CATEGORY}</small>
        <br />
        <small>Status: {TASK_STATUS}</small>
      </article>

      <p>Ready to get this done?</p>
    </>
  );
}

export default TaskItem;