import { Icon } from '@chakra-ui/react';
import { useState } from 'react';
import { FiChevronUp } from 'react-icons/fi';
import style from './Info.module.css';

export default function InfoTitle(props) {
  const [collapsed, setCollapsed] = useState(false);

  const { title, data } = props;

  const noTitl = data.title == null || data.title === '';
  const noPres = data.presenter == null || data.presenter === '';
  const noSubt = data.subtitle == null || data.subtitle === '';
  const noNote = data.note == null || data.note === '';

  return (
    <div className={style.container}>
      <div className={style.header}>
        {title}
        <Icon
          className={collapsed ? style.moreCollapsed : style.moreExpanded}
          as={FiChevronUp}
          onClick={() => setCollapsed((c) => !c)}
        />
      </div>

      {!collapsed && (
        <>
          <div>
            <span className={noTitl ? style.emptyLabel : style.label}>
              Title
            </span>
            {data.title}
          </div>
          <div>
            <span className={noPres ? style.emptyLabel : style.label}>
              Presenter
            </span>
            {data.presenter}
          </div>
          <div>
            <span className={noSubt ? style.emptyLabel : style.label}>
              Subtitle
            </span>
            {data.subtitle}
          </div>
          <div className={style.notes}>
            <span className={noNote ? style.emptyLabel : style.label}>
              Note
            </span>
            {data.note}
          </div>
        </>
      )}
    </div>
  );
}