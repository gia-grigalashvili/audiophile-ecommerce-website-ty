function Tech() {
  const technic = ["HEADPHONES", "SPEAKERS", "EARPHONES"];
  return (
    <div>
      {technic.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default Tech;
