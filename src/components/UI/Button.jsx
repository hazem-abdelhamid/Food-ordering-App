const Button = ({ children, textOnly, className, ...props }) => {
  // console.log(className);
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += " " + className;
  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
