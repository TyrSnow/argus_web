/* eslint-disable react/no-string-refs */
import * as React from 'react';
import {
  Modal,
} from 'antd';

class FormWrapModal extends React.Component {
  static defaultProps = {
    data: {},
  };

  shouldComponentUpdate(nextProps) {
    if (nextProps.visible) { // 可见的时候
      return true;
    }
    if (this.props.visible && !nextProps.visible) { // 可见性翻转
      return true;
    }
    if (this.props.dirt !== nextProps.dirt) {
      return true;
    }
    return false;
  }

  /**
   * 清理掉没有发生过变化的字段
   */
  dirt = (target, ori) => {
    for (const key in target) {
      if (typeof target[key] !== 'function') {
        if (ori[key] === target[key]) {
          delete target[key];
        }
      }
    }
  }

  validAndCollectRef(ref) {
    return new Promise((resolve, reject) => {
      ref.validateFields((err, fields) => {
        if (err) {
          return reject(err);
        }
        return resolve(fields);
      });
    });
  }

  collectAll = () => {
    const promises = [];
    let key;
    for (key in this.refs) {
      if (typeof this.refs[key] === 'object') {
        promises.push(this.validAndCollectRef(this.refs[key]));
      }
    }

    return Promise.all(promises);
  }

  handleCancel(e) {
    if (this.props.onCancel) {
      this.props.onCancel(e);
    }
  }

  handleOk(e) {
    this.collectAll().then((fieldsList) => {
      const fields = {};
      fieldsList.map((sub) => {
        Object.assign(fields, sub);
      });

      if (this.props.dirt) {
        this.dirt(fields, this.props.data);
      }
      if (this.props.onSubmit) {
        return this.props.onSubmit(fields);
      }
      return Promise.reject({
        message: '没有定义表单的处理函数',
      });
    }).then(res => {
      console.debug('response: ', res);
      Modal.success({
        title: res.message || '操作成功',
      });
      if (this.props.onCancel) {
        this.props.onCancel(e);
      }
    }).catch(err => {
      console.debug('err: ', err);
      if (err.message) { // 有提示再弹窗
        Modal.error({
          title: err.message,
        });
      }
    });
  }

  renderChildren() {
    return React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, Object.assign({
        ref: `child${index}`,
      }, this.props.data));
    });
  }

  render() {
    const { onSubmit, onCancel, ...other } = this.props;
    return (
      <Modal
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        {...other}
        destroyOnClose={true}
      >
        {this.renderChildren()}
      </Modal>
    )
  }
}

export default FormWrapModal;
