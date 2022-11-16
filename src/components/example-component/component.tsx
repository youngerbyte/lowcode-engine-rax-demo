import { forwardRef, ForwardRefRenderFunction, PureComponent, RaxNode } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import './style.scss';

export interface ComponentProps {
  /**
   * 名称
   */
  name: string;
  /**
   * 内容
   */
   content: any;
   /**
    * 文字尺寸
    */
   fontSize: number;

}

/**
 * 示例组件
 * @param props
 * @constructor
 */
// function ExampleComponent(props: ComponentProps, ref: any) {
//   return (
//     <View ref={ref}>
//       <Text style={{ fontSize: props.fontSize }}>{props.name}</Text>
//       <Text>{props.content}</Text>
//       {/* <Text style={props.style}>样式</Text> */}
//     </View>
//   );
// }

export default class ExampleComponent extends PureComponent<ComponentProps> {
  render(): RaxNode {
    const props = this.props;
    return (
      <View>
        <Text style={{ fontSize: props.fontSize }}>{props.name}</Text>
        <Text>{props.content}</Text>
        {/* <Text style={props.style}>样式</Text> */}
      </View>
    );
  }
}

// const RefComponent = forwardRef(ExampleComponent as ForwardRefRenderFunction<any, ComponentProps>);

// RefComponent.defaultProps = {
//   name: '标题',
// };
// RefComponent.displayName = 'ExampleComponent';

// export default RefComponent;
