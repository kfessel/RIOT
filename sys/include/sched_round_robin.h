/*
 * Copyright (C) 2020 TUBA Freiberg
 *
 * This file is subject to the terms and conditions of the GNU Lesser
 * General Public License v2.1. See the file LICENSE in the top level
 * directory for more details.
 */

/**
 * @addtogroup     sys_sched_round_robin
 *
 * @{
 *
 * @file
 * @brief       Round Robin Scheduler
 *
 * @author      Karl Fessel <karl.fessel@ovgu.de>
 *
 */
#ifndef SCHED_ROUND_ROBIN_H
#define SCHED_ROUND_ROBIN_H

#ifdef __cplusplus
extern "C" {
#endif

#if !defined(SCHED_RR_TIMEOUT) || defined(DOXYGEN)
/**
 * @brief   Time between round robin calls in Units of SCHED_RR_TIMERBASE
 *
 * @details Defaults to 10ms
 */
#if MODULE_ZTIMER_MSEC
#define SCHED_RR_TIMEOUT 10
#else
#define SCHED_RR_TIMEOUT 10000
#endif
#endif

#if !defined(SCHED_RR_TIMERBASE) || defined(DOXYGEN)
/**
 * @brief   ztimer to use for the round robin scheduler
 *
 * @details Defaults to ZTIMER_MSEC if available else it uses ZTIMER_USEC
 */
#if MODULE_ZTIMER_MSEC
#define SCHED_RR_TIMERBASE ZTIMER_MSEC
#else
#define SCHED_RR_TIMERBASE ZTIMER_USEC
#endif
#endif

#if !defined(SCHED_RR_MASK) || defined(DOXYGEN)
/**
 * @brief   Masks off priorities that should not be scheduled default: 0 is masked
 *
 * @details Priority 0 (highest) should always be masked.
 *          Threads with that priority may not be programmed
 *          with the possibility of being scheduled in mind.
 *          Parts of this scheduler assume 0 current_rr_priority is uninitialised.
 */
#define SCHED_RR_MASK (1 << 0)
#endif

/**
 *  @brief Initialises the Round Robin Scheduler
 */
void sched_round_robin_init(void);

#ifdef __cplusplus
}
#endif

#endif /* SCHED_ROUND_ROBIN_H */
/** @} */
