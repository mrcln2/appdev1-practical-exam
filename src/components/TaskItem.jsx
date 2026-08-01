function TaskItem({ task, description }) {
  return (
    <>
      <article>
        <h3>{task}</h3>
        <p>{description}</p>
      </article>
    </>
  );
}

export default TaskItem;