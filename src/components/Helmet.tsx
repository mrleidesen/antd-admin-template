import { useEffect } from 'react';

import { APP_TITLE } from '@/utils/constant';

/**
 * 显示当前页面的标题
 */
export const Helmet: React.FC<{
  title?: string;
}> = ({ title }) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} - ${APP_TITLE}`;
    } else {
      document.title = APP_TITLE;
    }

    return () => {
      document.title = APP_TITLE;
    };
  }, [title]);

  return null;
};
