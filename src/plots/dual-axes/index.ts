import { Plot } from '../../core/plot';
import { DualAxesOption } from './types';
import { adaptor } from './adaptor';
import { Adaptor } from '../../core/adaptor';

export { DualAxesOption };

export class DualAxes extends Plot<DualAxesOption> {
  /** 图表类型: 双轴图 */
  public type: string = 'dual-axes';

  /**
   * 获取双轴图的适配器
   */
  protected getSchemaAdaptor(): Adaptor<DualAxesOption> {
    return adaptor;
  }
}
