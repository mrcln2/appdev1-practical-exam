import { TASK_CATEGORY, TASK_STATUS } from './taskConstants';

function getTaskMessage() {
  return 'Keep going!';
}

function TaskItem({ task, description }) {
  const userName = 'Marclean';
  const taskType = 'Task';

  const isCompleted = false;

  return (
    <>
      <article className="task-card">
        <h3>{task}</h3>

        <p>{description}</p>

        <p>{`${userName}'s ${taskType}`}</p>

        <p>Task Number: {1 + 1}</p>

        <p>{isCompleted ? 'Completed' : 'Not Completed'}</p>

        <small>Category: {TASK_CATEGORY}</small>
        <br />
        <small>Status: {TASK_STATUS}</small>
      </article>

      <p>{getTaskMessage()}</p>
    </>
  );
}

export default TaskItem;