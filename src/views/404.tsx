import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const NotFoundView: React.FC = () => {
  return (
    <Result
      status="404"
      title="404"
      sub-title="当前页面不存在"
      extra={
        <Link to="/">
          <Button type="primary">返回首页</Button>
        </Link>
      }
    />
  );
};

export default NotFoundView;
