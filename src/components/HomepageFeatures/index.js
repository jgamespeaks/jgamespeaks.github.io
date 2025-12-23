import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '실전 플레이 기록',
    image: require('@site/static/bg/home01.png').default,
    description: (
      <>
        직접 겪고 실패 경험을 바탕으로 이론이 아닌 실전 기반의 명확한 가이드를 정리합니다.
      </>
    ),
  },
  {
    title: '의견 대신 구조',
    image: require('@site/static/bg/home02.png').default,
    description: (
      <>
        단순한 티어표나 뇌피셜이 아닌 의사결정의 기준이 되는 게임 구조와 로직에 초점을 맞춥니다.
      </>
    ),
  },
  {
    title: '테크니컬 로깅',
    image: require('@site/static/bg/home03.png').default,
    description: (
      <>
          플레이, 분석 결과를 명확하고 체계적인 문서 형식으로 정리하여 독자가 즉시 활용 가능한 실전 가이드로 만듭니다.
      </>
    ),
  },
];

function Feature({image, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img
                    src={image}
                    className={styles.featureImage}
                    alt={title}
                />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
