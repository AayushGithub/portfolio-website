import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { AwardsItem, AwardsTitle, AwardedByTitle } from './styles';

const Awards = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Awards</SectionTitle>
        <ul>
          {user.awards.map((awards, i) => (
            <AwardsItem key={i}>
              <AwardsTitle>{awards.title}</AwardsTitle>
              <div>
                <AwardedByTitle>{awards.awarder}</AwardedByTitle>
                <span> &sdot; </span>
                <span>
                  Valid from: {awards.fullDate.month}, {awards.fullDate.year}
                </span>
              </div>
              <Paragraph>{awards.summary}</Paragraph>
            </AwardsItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Awards;
