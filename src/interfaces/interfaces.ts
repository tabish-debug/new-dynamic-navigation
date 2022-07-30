type getValue = (value: string) => void;

export interface SessionInterface {
  sessionId: string;
}

export interface arrowInterface {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export interface choiceInterface {
  name: string;
  className: string;
  getValue: getValue;
}

export interface loadingInterface {
  width: string;
  height: string;
}

export interface optionInterface {
  name: string;
  checked: boolean;
  getValue: getValue;
}
