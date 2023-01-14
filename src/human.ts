// Human class
class Human {
  constructor(
    public name: string,
    public father_name: string,
    public age: number,
    public Gender: string
  ) {
    (this.name = name),
      (this.father_name = father_name),
      (this.age = age),
      (this.Gender = Gender);
  }
}

export default Human;
