import React, { useRef, useEffect } from "react";
import { Edit2 } from "lucide-react";

interface EditableTextProps {
  value: string;
  onChange: (val: string) => void;
  isEditing: boolean;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "span" | "div" | "p";
}

export const EditableText: React.FC<EditableTextProps> = ({
  value,
  onChange,
  isEditing,
  className = "",
  tag = "span",
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current && elementRef.current.innerText !== value) {
      elementRef.current.innerText = value;
    }
  }, [value]);

  const handleBlur = () => {
    if (elementRef.current) {
      const text = elementRef.current.innerText.trim();
      onChange(text || value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      elementRef.current?.blur();
    }
  };

  const Tag = tag as any;

  if (!isEditing) {
    return <Tag className={className}>{value}</Tag>;
  }

  return (
    <div className="relative group/edit inline-block w-full">
      <Tag
        ref={elementRef}
        contentEditable
        suppressContentEditableWarning
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={`${className} outline-none border-b border-dashed border-rose-500/40 bg-rose-500/5 hover:bg-rose-500/10 focus:bg-rose-500/10 focus:border-rose-500 rounded px-1 transition-all cursor-text min-w-[20px]`}
        title="Klik untuk mengedit teks"
      />
      <span className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover/edit:opacity-100 transition-opacity pointer-events-none">
        <Edit2 className="w-3 h-3 text-rose-400" />
      </span>
    </div>
  );
};

interface EditableAreaProps {
  value: string;
  onChange: (val: string) => void;
  isEditing: boolean;
  className?: string;
  rows?: number;
}

export const EditableArea: React.FC<EditableAreaProps> = ({
  value,
  onChange,
  isEditing,
  className = "",
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current && elementRef.current.innerText !== value) {
      elementRef.current.innerText = value;
    }
  }, [value]);

  const handleBlur = () => {
    if (elementRef.current) {
      const text = elementRef.current.innerText.trim();
      onChange(text || value);
    }
  };

  if (!isEditing) {
    // Preserve linebreaks
    return (
      <p className={className}>
        {value.split("\n").map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i < value.split("\n").length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
    );
  }

  return (
    <div className="relative group/edit w-full block">
      <div
        ref={elementRef}
        contentEditable
        suppressContentEditableWarning
        onBlur={handleBlur}
        className={`${className} outline-none border border-dashed border-rose-500/40 bg-rose-500/5 hover:bg-rose-500/10 focus:bg-rose-500/10 focus:border-rose-500 rounded p-2 transition-all cursor-text min-h-[40px] whitespace-pre-wrap`}
        title="Klik untuk mengedit paragraf"
      />
      <span className="absolute right-2 bottom-2 opacity-0 group-hover/edit:opacity-100 transition-opacity pointer-events-none">
        <Edit2 className="w-3.5 h-3.5 text-rose-400" />
      </span>
    </div>
  );
};
