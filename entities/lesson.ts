/**
 * Lesson represents and entity of an article
 *
 * Created August 17th, 2023
 * @author ywarezk
 * @version 0.3.0
 * @license MIT
 */

export type Topic = 'react' | 'angular' | 'express' | 'node';

export interface Lesson {
  slug: string;
  title: string;
  topic: Topic;
  tldr: string;
  cover: string;
}
