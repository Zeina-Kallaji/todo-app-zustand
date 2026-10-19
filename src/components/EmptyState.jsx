import React from 'react'
import { EmptyStateIcon } from './Icons'

function EmptyState({ activeTab }) {
  const getEmptyMessage = () => {
    switch (activeTab) {
      case 'completed':
        return {
          iconType: 'completed',
          title: 'لا توجد مهام منجزة',
          message: 'ابدأ بإنجاز مهامك لرؤيتها هنا',
        }
      case 'incomplete':
        return {
          iconType: 'incomplete',
          title: 'رائع! أنجزت جميع مهامك',
          message: 'أحسنت! يمكنك إضافة مهام جديدة',
        }
      default:
        return {
          iconType: 'default',
          title: 'لا توجد مهام بعد',
          message: 'ابدأ بإضافة أول مهمة لك',
        }
    }
  }

  const emptyState = getEmptyMessage()

  return (
    <div className="empty-state">
      <div className="empty-state-icon">
        <EmptyStateIcon type={emptyState.iconType} size={80} />
      </div>
      <h3 className="empty-state-title">{emptyState.title}</h3>
      <p className="empty-state-message">{emptyState.message}</p>
    </div>
  )
}

export default EmptyState
