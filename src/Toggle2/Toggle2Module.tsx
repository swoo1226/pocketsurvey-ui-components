class Toggle2Module {
  constructor(
    private readonly onClick?:
      | React.MouseEventHandler<HTMLDivElement>
      | undefined,
  ) {}

  handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (this.onClick) {
      this.onClick(e);
    }
  }
}

export default Toggle2Module;
