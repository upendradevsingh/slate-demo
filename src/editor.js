import { h, Component } from 'preact';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';

const initialValue = [
  {
    children: [
      { text: 'This is editable plain text, just like a <textarea>!' },
    ],
  },
];

export default class PlainTextExample extends Component {
  constructor() {
    super();
    this.state = {
      value: initialValue,
    };
    this.editor = withHistory(withReact(createEditor()));
  }

  onChange(value) {
    console.log(value);
    this.setState({ value });
  }

  render() {
    return (
      <Slate
        editor={this.editor}
        value={this.state.value}
        onChange={this.onChange.bind(this)}>
        <Editable placeholder="Enter some plain text..." />
      </Slate>
    );
  }
}
