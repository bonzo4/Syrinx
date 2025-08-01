import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const baseStyles = [
      "inline-flex items-center justify-center gap-2",
      "font-medium rounded-lg transition-all duration-200",
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "relative overflow-hidden",
    ];

    const variants = {
      primary: [
        "bg-blue-600 text-white hover:bg-blue-700",
        "focus:ring-blue-500 active:bg-blue-800",
        "dark:bg-blue-500 dark:hover:bg-blue-600 dark:active:bg-blue-700",
      ],
      secondary: [
        "bg-gray-600 text-white hover:bg-gray-700",
        "focus:ring-gray-500 active:bg-gray-800",
        "dark:bg-gray-500 dark:hover:bg-gray-600 dark:active:bg-gray-700",
      ],
      outline: [
        "border-2 border-gray-300 text-gray-700 hover:bg-gray-50",
        "focus:ring-gray-500 active:bg-gray-100",
        "dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800",
        "dark:active:bg-gray-700",
      ],
      ghost: [
        "text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
        "active:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800",
        "dark:active:bg-gray-700",
      ],
      destructive: [
        "bg-red-600 text-white hover:bg-red-700",
        "focus:ring-red-500 active:bg-red-800",
        "dark:bg-red-500 dark:hover:bg-red-600 dark:active:bg-red-700",
      ],
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm min-h-[32px]",
      md: "px-4 py-2 text-sm min-h-[40px]",
      lg: "px-6 py-3 text-base min-h-[48px]",
      xl: "px-8 py-4 text-lg min-h-[56px]",
    };

    const iconSizes = {
      sm: "w-4 h-4",
      md: "w-4 h-4",
      lg: "w-5 h-5",
      xl: "w-6 h-6",
    };

    const spinnerSizes = {
      sm: "w-3 h-3",
      md: "w-4 h-4",
      lg: "w-5 h-5",
      xl: "w-6 h-6",
    };

    const classes = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      fullWidth && "w-full",
      className,
    );

    const LoadingSpinner = ({ size }: { size: keyof typeof spinnerSizes }) => (
      <div
        className={cn(
          "animate-spin rounded-full border-2 border-current border-t-transparent",
          spinnerSizes[size],
        )}
        aria-hidden="true"
      />
    );

    return (
      <button
        className={classes}
        disabled={disabled || isLoading}
        ref={ref}
        {...props}
      >
        {isLoading ? (
          <LoadingSpinner size={size} />
        ) : (
          leftIcon && (
            <span className={cn("flex-shrink-0", iconSizes[size])}>
              {leftIcon}
            </span>
          )
        )}

        {children && (
          <span className={isLoading ? "opacity-0" : "opacity-100"}>
            {children}
          </span>
        )}

        {!isLoading && rightIcon && (
          <span className={cn("flex-shrink-0", iconSizes[size])}>
            {rightIcon}
          </span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
export default Button;
